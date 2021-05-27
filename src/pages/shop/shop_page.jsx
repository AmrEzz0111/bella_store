import { Component } from "react";
import { SHOP_DATA } from "./shop.data";
import { CollectionsPreview } from "../../components/preview-collection/collections.preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionsPreview
            key={id}
            {...otherCollection}
          ></CollectionsPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
