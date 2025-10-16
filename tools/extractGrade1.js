const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/lib/questions.ts');
const text = fs.readFileSync(filePath, 'utf8');

function findObjectsForGrade(grade) {
  // match both `gradeMin: N` and `gradeMin: N,` to reduce false positives
  const needle = `gradeMin: ${grade}`;
  const results = [];
  let idx = 0;
  const seenIds = new Set();

  while ((idx = text.indexOf(needle, idx)) !== -1) {
    // walk backwards to the opening brace
    let start = idx;
    while (start >= 0 && text[start] !== '{') start--;
    if (start < 0) { idx += needle.length; continue; }

    // walk forwards to find matching closing brace
    let i = start;
    let depth = 0;
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;
    let escaped = false;
    for (; i < text.length; i++) {
      const ch = text[i];
      if (escaped) { escaped = false; continue; }
      if (ch === "\\") { escaped = true; continue; }
      if (!inSingle && !inDouble && ch === '`') { inTemplate = !inTemplate; }
      if (!inDouble && !inTemplate && ch === "'") { inSingle = !inSingle; }
      if (!inSingle && !inTemplate && ch === '"') { inDouble = !inDouble; }
      if (inSingle || inDouble || inTemplate) continue;
      if (ch === '{') depth++;
      if (ch === '}') {
        depth--;
        if (depth === 0) break;
      }
    }

    if (i >= text.length) { idx += needle.length; continue; }
    const objText = text.slice(start, i + 1);

    // try to grab id property for dedup
    const idMatch = objText.match(/id:\s*['"]([^'"\\]+)['"]/);
    const id = idMatch ? idMatch[1] : null;
    if (id && seenIds.has(id)) {
      idx = i + 1;
      continue;
    }
    if (id) seenIds.add(id);
    results.push(objText);
    idx = i + 1;
  }

  return results;
}

const gradeArg = process.argv[2] ? Number(process.argv[2]) : null;
if (!gradeArg || Number.isNaN(gradeArg)) {
  console.error('Usage: node extractGrade1.js <gradeNumber>');
  process.exit(2);
}

const objs = findObjectsForGrade(gradeArg);

if (!objs.length) {
  console.error('No objects found for grade', gradeArg);
  process.exit(2);
}

// Build TS file content
const out = [];
out.push("import { Question } from '../types';\n");
out.push(`export const grade${gradeArg}Questions: Question[] = [`);
for (const o of objs) {
  out.push(o + ',\n');
}
out.push('];\n\nexport default grade' + gradeArg + 'Questions;\n');

const outPath = path.resolve(__dirname, `../src/lib/questions/grade${gradeArg}.ts`);
fs.writeFileSync(outPath, out.join('\n'), 'utf8');
console.log('Wrote', outPath, 'with', objs.length, 'objects');
