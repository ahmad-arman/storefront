import React from 'react';

import {connect} from 'react-redux'

const Product = props => {
    return (
        <section>
            {console.log(props,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
        </section>
    )

}

const mapStateToProps = state =>({
   
    data : state.category ? state.category.data :null
} )

export default connect(mapStateToProps)(Product)