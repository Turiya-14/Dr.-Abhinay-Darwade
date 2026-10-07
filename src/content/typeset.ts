/**
 * Small typographic rules applied to all copy, so authors can write plain text:
 *  - “Dr.” never ends a line apart from the name that follows it;
 *  - a journal issue stays on the same line as its page range, e.g. “17(12): 131–135”.
 */
const rules: Array<[RegExp, string]> = [
  [/\bDr\. /g, 'Dr. '],
  [/\): /g, '): '],
];

export const typeset = (text: string) => rules.reduce((out, [pattern, replacement]) => out.replace(pattern, replacement), text);

/** Applies `typeset` to every string inside the given content objects, in place. */
export function typesetAll(...targets: object[]) {
  const visit = (node: unknown): unknown => {
    if (typeof node === 'string') return typeset(node);
    if (Array.isArray(node)) {
      node.forEach((value, index) => {
        node[index] = visit(value);
      });
    } else if (node && typeof node === 'object') {
      const record = node as Record<string, unknown>;
      for (const key of Object.keys(record)) record[key] = visit(record[key]);
    }
    return node;
  };
  targets.forEach(visit);
}
