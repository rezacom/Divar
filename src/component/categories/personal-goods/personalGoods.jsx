import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchMain from "../../searchMain";
import Tags from "../../tags";
import Cart from "../../cart";
import load from "../../../load.svg";
import CityContext from "../../context/cityContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  marginTop: {
    marginTop: 30
  },
  imgLoad: {}
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const city_context = useContext(CityContext);

  // const [cityApi, setCityApi] = useState('tehran')
  const [categoryId, setCategoryId] = useState();
  const [searchFlag, setSearchFlag] = useState(false);
  const [itemResultState, setItemResultState] = useState(null);

  const [apiResponse, setApiResponse] = useState({
    error: null,
    isLoaded: true,
    data: null
  });

  const [apiUrl, setApiUrl] = useState({
    url: "https://api.divar.ir/v8/web-search/",
    cityId: city_context ? city_context : "tehran"
  });

  useEffect(() => {
    if (city_context) {
      setApiUrl({
        url: "https://api.divar.ir/v8/web-search/",
        cityId: city_context
      });
    }

    fetch(`${apiUrl.url}${apiUrl.cityId}/personal-goods`)
      .then(res => res.json())
      .then(res => {
        setItemResultState(res.widget_list);

        setApiResponse({
          error: null,
          isLoaded: false,
          data: res
        });
        console.log(res);
      })
      .catch(err => {
        setApiResponse({
          error: err,
          isLoaded: true,
          data: null
        });
        setItemResultState(null);
      });
  }, [city_context, categoryId]);

  function handleTagId(id) {
    setCategoryId(id);
  }

  function handleValueSearch(value) {
    if (value)
      setSearchFlag({
        flag: true,
        value: value
      });
    else setSearchFlag(false);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.marginTop}>
        <Grid item xs={3}>
          <aside className="sidebar">
            <div className="sidebox">
              <ul className="sidebox__nav">
                <li className="sidebox__nav-title">دسته بندی ها</li>

                
              </ul>
            </div>
          </aside>
        </Grid>
        <Grid item xs={9}>
          <SearchMain catName={"وسایل شخصی"} valueSearch={handleValueSearch} />
          <div className="tag-container" id="parentTagList">
            {!apiResponse.isLoaded
              ? apiResponse.data.suggestion_list.map((item, index) => (
                  <Tags
                    title={item.displayed_text}
                    key={index}
                    handleTagId={handleTagId}
                    id={item.value.category.value}
                  />
                ))
              : ""}
          </div>

          <div className="cart-container-p">
            {!apiResponse.isLoaded && apiResponse.data.seo_details.title
              ? apiResponse.data.seo_details.title
              : ""}
          </div>

          <div className="cart-container">
            {!searchFlag.flag ? (
              !apiResponse.isLoaded ? (
                apiResponse.data.widget_list.map((item, index) => (
                  <Link
                    to={{
                      pathname: "item",
                      search: `?some=search-${item.data.title}-${item.data.city}`,
                      state: { item },
                    }}
                    className="cart-box"
                  >
                    <Cart key={index} cartDate={item} />
                  </Link>
                ))
              ) : (
                <div className="loading-container">
                  <img src={load} className="loading-container__img" />
                </div>
              )
            ) : (
              itemResultState
                .filter(item => item.data.title.includes(searchFlag.value))
                // .filter(item => console.log(item.data.title))
                .map((item, index) => (
                  <Link
                    to={{
                      pathname: "item",
                      search: `?some=search-${item.data.title}-${item.data.city}`,
                      state: { item },
                    }}
                    className="cart-box"
                  >
                    <Cart key={index} cartDate={item} />
                  </Link>
                ))
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
