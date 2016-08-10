import postcss from 'postcss';
import test from 'ava';
import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('postcss-dotted-border test', t => {
    let input = 'div { dotted-border-bottom: 3px 3px 4px #000; }',
        output = 'div { background-image: linear-gradient(to right, #000,';
    output += ' #000 3px, transparent 3px, transparent 4px);';
    output += ' background-size: 7px 3px;';
    output += ' background-position: bottom; background-repeat: repeat-x; }';

    return run(t, input, output);
});
