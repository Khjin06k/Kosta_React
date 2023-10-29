function PropsBoolean({BooleanTrueFalse}){
    return(
        <>
            {BooleanTrueFalse ? "2. " : "1. "} 
            {BooleanTrueFalse.toString()}<br/>
        </>
    )
}

export default PropsBoolean;