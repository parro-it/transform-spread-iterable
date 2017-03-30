import test from 'ava';
import spread from '.';

test('command with one argument', t => {
	const result = Array.from(spread([[1, 2, 3], 42, 43]));
	t.deepEqual(result, [1, 2, 3, 42, 43]);
});
