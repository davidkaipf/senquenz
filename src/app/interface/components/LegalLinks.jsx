import React  from 'react';
import             '../../../css/component/LegalLinks.css';


export class LegalLinks extends React.PureComponent{

render() {
    return(
        <div className = {this.props.className}>
            <p className = "legalBlock">
                <a href = "./Impressum.html" target = "_blank">Impressum</a> |
                <a href = "./Datenschutz.html" target = "_blank"> Datenschutz</a>
            </p>
        </div>
    )
}
}
