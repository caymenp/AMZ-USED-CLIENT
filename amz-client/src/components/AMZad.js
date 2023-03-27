import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class AMZad extends Component {
  render() {
    const script1 = `
  amzn_assoc_placement = "adunit0";
  amzn_assoc_tracking_id = "pricecut20-20";
  amzn_assoc_ad_mode = "search";
  amzn_assoc_ad_type = "smart";
  amzn_assoc_marketplace = "amazon";
  amzn_assoc_region = "US";
  amzn_assoc_default_search_phrase = "${this.props.prodName}";
  amzn_assoc_default_category = "All";
  amzn_assoc_linkid = "57cc56e736c10ffd87f14ef0500116f1";
  amzn_assoc_design = "in_content";
  amzn_assoc_title = "Related Amazon Products:";`;

    return (
      <Helmet>
        <script type="text/javascript">{script1}</script>
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
      </Helmet>
    );
  }
}
