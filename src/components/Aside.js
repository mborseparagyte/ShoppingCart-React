import React, { Component } from "react";
class Aside extends Component {
  getCategories() {
    return (
      this.props.categories &&
      this.props.categories.map(category => {
        return (
          <div className="ais-hierarchical-menu--item" key={category.id}>
            <div
              onClick={
                this.props.categoryClicked &&
                this.props.categoryClicked.bind(this, category.Name)
              }
              style={{ cursor: "pointer" }}
            >
              <a className="facet-item ">
                <span className="facet-name">
                  <i className="fa fa-angle-right" /> {category.Name}
                </span>
              </a>
            </div>
          </div>
        );
      })
    );
  }
  render() {
    return (
      <aside>
        <section className="facet-wrapper">
          <div className="facet-category-title">Categories</div>
          <div id="categories">
            <div data-reactroot="">
              <div className="ais-root ais-hierarchical-menu">
                <div className="ais-body ais-hierarchical-menu--body">
                  <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
                    <div className="ais-hierarchical-menu--item">
                      <div
                        onClick={
                          this.props.categoryClicked &&
                          this.props.categoryClicked.bind(this, "")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <a href="javascript:void(0);" className="facet-item ">
                          <span className="facet-name">
                            <i className="fa fa-angle-right" /> All
                          </span>
                        </a>
                      </div>
                    </div>
                    {this.getCategories()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    );
  }
}

export default Aside;
