function daysStyles() {
    return (
        theme => ({
    calenderPage: {
        textAlign: 'center',
        position: "relative",
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 40,
        padding: '0 30px',
    },
    calender: {
        padding: '25px 0px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold'
    }
})
)
}

export default daysStyles;
