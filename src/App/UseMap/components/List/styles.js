import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
    return {
        container: {
            padding: '25px', marginTop: '12px', height: '75vh'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginBottom: '30px',
        },
        list: {
            height: '65vh', overflow: 'auto'
        },
        loading: {
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
    }
})