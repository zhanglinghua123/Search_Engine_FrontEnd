import {TabPanel} from "../TabPanel";

interface ClubListProps {
    index: number;
    value: number;
}

export function ClubList(props: ClubListProps){

    const {index, value, ...other} = props;

    return (
        <TabPanel index={index} value={value} />
    )

}