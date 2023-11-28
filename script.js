console.log('yeach')

const getTreeData = () => {
    return {
        element: 'test',
        left: {
            element: 'test12',
            left: {
                element: 'test122'
            },
            right: {
                element: 'test123'
            },
        },
        right: {
            element: 'test13',
            left: {
                element: 'test132',
            },
            right: {
                element: 'test133',
                left: {
                    element: 'test1332',
                },
                right: {
                    element: 'test1333'
                },
            },
        },
    };
};

const renderTree = (node) => {
    const {left, right, element} = node;
    return `
        <div class="node__element">${element}</div>
        ${
            left || right 
            ?  `<div class="node__ bottom-line"></div>
                <div class="node__children">
                    ${
                        left ? (
                            `
                            <div class="node">
                                ${renderTree(left)}
                            </div>`
                        ) : ''
                    }
                    ${
                        right ? 
                            `
                            <div class="node">
                                ${renderTree(right)}
                            </div>
                        `
                        : ""
                    }
                    </div>
                    `
                    : ""
        }
    `;
};

const main = () => {
    const rootNode = getTreeData();
    const treeDOMElement = document.querySelector('.tree')
    treeDOMElement.innerHTML = renderTree(rootNode)
    // document.write(renderTree(rootNode))
}

main(); 