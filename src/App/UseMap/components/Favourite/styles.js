import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => {
    return {
        container: {
            padding: '30px', boxShadow: '5px 10px 18px #888888', height: '100%', width: '100%', marginTop: '100px'
        },
        list: {
            justifyContent: 'space-between'
        }
    }
})
