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
    return `
        <div class="node__element">Root</div>
        <div class="node__bottom-line"></div>
        <div class="node__children">
            <div class="node">
                <div class="node__element">Left Child</div>
            </div>
            <div class="node">
                <div class="node__element">Right Child</div>
            </div>
        </div>`
}

const main = () => {

}

main(); 