import React from "react";
import { Link} from "react-router-dom";
import Movie from "./Movie/Movie";
import movies from "../../../api/data.json";
import BackArrowIcon from "../../../assets/Icon-backward.svg";
import SearchIcon from "../../../assets/Icon-search.svg";
import ButtonGrid from "../../../assets/icon-grid.svg";
import ButtonList from "../../../assets/icon-list.svg";
import PlusIcon from "../../../assets/icon-plus.svg";
import "./WishlistTable.scss";

const WishlistTable = () => {
  return (
    <div className="WishlistTable">
      <div className="Container">
        <main>
          <div className="LinkBack">
            <img src={BackArrowIcon} alt="Arrow backward" />
            <Link to="/">Back to catalog</Link>
          </div>
          <div className="Header">
            <h1>Wishlist</h1>
            <div className="TableFilters">
              <div className="SearchBar">
                <input type="text" name="search" value="value" />
                <img src={SearchIcon} alt="Search icon" />
              </div>
              <div className="SelectFilter">
                <select>
                  <option value="recently-added">Recently added</option>
                  <option value="by-relevance">By relevance</option>
                  <option value="oldest-addition">Oldest addition</option>
                </select>
              </div>
              <button type="submit">Add a movie</button>
              <div className="GridListButtons">
                <button type="button" className="selected"><img src={ButtonGrid} alt="Button grid icon" /></button>
                <button type="button" className="notSelected"><img src={ButtonList} alt="Button list icon" /></button>
              </div>
            </div>
          </div>

          <div className="Categories">
            <div className="select">All</div>
            <div><img src={PlusIcon} alt="Plus icon" /> Horror</div>
            <div><img src={PlusIcon} alt="Plus icon" /> Comedy</div>
            <div><img src={PlusIcon} alt="Plus icon" /> 4K</div>
          </div>

          <div className="SelectionPart">
            <div className="SelectionHead">
              <h2>Titles (12)</h2>
              <button type="submit">Delete selection</button>
            </div>
            <div className="SelectionBody">
              {movies.movie.map((element) => (
                <div key={element.id}>
                  <Movie title={element.title} cover={element.cover} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default WishlistTable;