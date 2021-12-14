import PropTypes from 'prop-types'

const Card = ({children,reverse}) => {
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    // )
    
    return <div className="card"
    style={{
        backgroundColor:reverse?'rgba(0,0,0,0.4)':'#fff',
        color:reverse?'#fff':'#000'
    }}
    >{children}</div>
}
Card.propTypes = {
    reverse:PropTypes.bool,
    children:PropTypes.node.isRequired
}
Card.defaultProps = {
    reverse:false
}

export default Card
