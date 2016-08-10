import postcss from 'postcss';
import getGradient from './getGradient.js';
import getBgSize from './getBgSize.js';

module.exports = postcss.plugin('postcss-dotted-border',  () => {

    // Work with options here


    return function (css) {

        css.walkDecls(/^dotted-border/, function (decl) {
            var gradient = getGradient(decl),
                bgSize = getBgSize(decl);

            decl.cloneBefore({
                prop: 'background-image',
                value: gradient
            });
            decl.cloneBefore({
                prop: 'background-size',
                value: bgSize
            });

            switch (decl.prop) {
            case 'dotted-border-top':
                decl.cloneBefore({
                    prop: 'background-position',
                    value: 'top'
                });
                decl.cloneBefore({
                    prop: 'background-repeat',
                    value: 'repeat-x'
				});
                break;
            case 'dotted-border-right':
                decl.cloneBefore({
                    prop: 'background-position',
                    value: 'right'
                });
                decl.cloneBefore({
                    prop: 'background-repeat',
                    value: 'repeat-y'
                });
                break;
            case 'dotted-border-bottom':
                decl.cloneBefore({
                    prop: 'background-position',
                    value: 'bottom'
                });
                decl.cloneBefore({
                    prop: 'background-repeat',
                    value: 'repeat-x'
                });
                break;
            case 'dotted-border-left':
                decl.cloneBefore({
                    prop: 'background-position',
                    value: 'left'
                });
                decl.cloneBefore({
                    prop: 'background-repeat',
                    value: 'repeat-y'
                });
                break;
            default:
				return 'dotted-border is undefined';
            }
            decl.remove();
        });
    };
});
