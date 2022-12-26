import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
    return {
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: '#086c62',
            fontWeight: 'bold'
        },
        toolbar: {
            display: 'flex', justifyContent: 'space-between',
        },
    }
})