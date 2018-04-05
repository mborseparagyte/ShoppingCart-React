import React, { Component } from "react";
const Aside = props => {
  return (
    <aside>
      <section className="facet-wrapper">
        <div className="facet-category-title">Show results for</div>
        <div id="categories">
          <div data-reactroot="">
            <div className="ais-root ais-hierarchical-menu">
              <div className="ais-body ais-hierarchical-menu--body">
                <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Bathroom
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Cooking
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Decoration
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Dining
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Eating
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Kitchen &amp;
                          appliances
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Lighting
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Small storage
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Textiles &amp;
                          Rugs
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ais-hierarchical-menu--item">
                    <div>
                      <a href="javascript:void(0);" className="facet-item ">
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> Winter holidays
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="facet-category-title">Refine by</div>
      <div id="materials" className="facet">
         <div className="facet-title">Materials</div>
      </div>

      <div className="ais-body">
      <a href="javascript:void(0);" className="facet-item">
      <input type="checkbox" className="ais-refinement-list--checkbox" value="Polypropylene" />Polypropylene<span className="facet-count">(602)</span></a>
      </div>

      <div className="ais-body">
          <a href="javascript:void(0);" className="facet-item">
        <input type="checkbox" className="ais-refinement-list--checkbox" value="100 % polyester" />100 % polyester
        <span className="facet-count">(527)</span></a>
      </div>

      <div className="ais-body">
          <a href="javascript:void(0);" className="facet-item">
        <input type="checkbox" className="ais-refinement-list-checkbox" value="Glass" />Glass
        <span className="facet-count">(487)</span></a>
    </div>

        <div className="ais-body"><a href="javascript:void(0);" className="facet-item">
        <input type="checkbox" className="ais-refinement-list--checkbox" value="100 % cotton" />100 % cotton
        <span className="facet-count">(396)</span>
        </a>
      </div>
      
      <div className="ais-body"><a href="javascript:void(0);" className="facet-item">
      <input type="checkbox" className="ais-refinement-list--checkbox" value="ABS plastic" />ABS plastic<span className="facet-count">(396)</span></a>
      </div>

      <div className="ais-body"><a href="javascript:void(0);" className="facet-item">
      <input type="checkbox" className="ais-refinement-list--checkbox" value="Stainless steel" />Stainless steel<span className="facet-count">(309)</span></a>
      </div>    
      
    </aside>
  );
};

export default Aside;
