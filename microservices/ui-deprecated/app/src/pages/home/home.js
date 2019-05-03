import React from 'react';
import AppNavigator from "../../layout/appNavigator/appNavigator";
import PrimaryHero from "./sections/heroVideo/heroVideo";
import Browse from "./sections/browse/browse";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchCollections, fetchProducts} from "../../redux/actions";
import Footer from "../../components/footer/footer";

class Home extends React.Component {
    componentDidMount() {
        // Fetch the products
        this.props.fetchProducts();
        this.props.fetchCollections();
    }

    render() {
        return (
            <AppNavigator>
                <PrimaryHero />

                <Browse />

                <Footer />
            </AppNavigator>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchProducts: fetchProducts,
        fetchCollections: fetchCollections,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
