import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => {
    return {
        mapContainer: {
            height: '85vh', width: '65.6%', position: 'absolute', boxShadow: '5px 10px 18px #888888', marginTop: '12px'
        },
        markerContainer: {
            position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
        },
        paper: {
            padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
        },
        pointer: {
            cursor: 'pointer',
        },
        rating: {
            padding: '5px', justifyContent: 'center',
        }
    }
})