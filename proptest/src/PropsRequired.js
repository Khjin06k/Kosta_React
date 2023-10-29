import datatype from 'prop-types';

let PropsRequired = ({ReactString, ReactVersion}) => {
    return(
        <>
            {ReactString} {ReactVersion}
        </>
    )
}

// App에서 ReactString, ReactVersion을 둘 다 보내지 않아도 보낸 것만 출력되는데
// 아래는 이를 막기 위해 설정하는 코드로 꼭 가져와야 하는 데이터가 있을 경우 isRequired 설정을 해줌
// 데이터가 없을 경우 콘솔에 에러 출력
PropsRequired.propTypes ={
    ReactString: datatype.string.isRequired
}

// 가져온 값이 없을 경우 넣어줄 기본값을 설정
PropsRequired.defaultProps = { 
    ReactString: '리액트',
    ReactVersion: 501
}

export default PropsRequired;