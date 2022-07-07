import {TabPanel} from "../TabPanel";

interface PersonListProps {
    index: number;
    value: number;
}

export function PersonList(props: PersonListProps){
    const {index, value, ...other} = props;

    return (
        <TabPanel index={index} value={value} />
    )
}
