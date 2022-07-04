export function getPrefixCls(key: string): string {
        let nameDict: {
            [propname: string]: string;
        } = {
            col: 'my-prefix-col',
            row: 'my-prefix-row',
            spin: 'my-prefix-spin',
            icon: 'my-prefix-icon',
            button: 'my-prefix-button',
            alert: 'my-prefix-alert',
            drawer: 'my-prefix-drawer',
        };
        return nameDict[key];
}
    
