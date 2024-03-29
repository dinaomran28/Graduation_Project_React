import { makeStyles } from "@material-ui/core";

export default makeStyles(() => {
    return {
        chip: {
            margin: '5px 5px 5px 0',
        },
        subtitle: {
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
        },
        spacing: {
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        },
    }
});