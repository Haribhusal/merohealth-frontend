import React, { useEffect } from "react";
import { userActions } from "../../../services/user/action";
import { useRouter } from "next/router";

const SearchListShow = ({ searchText, dispatch, user, setSearchText }) => {
  const router = useRouter();
  const { data, loading, status } = user.getLabTest;

  useEffect(() => {
    dispatch(userActions.getLabTest(searchText, 0, 3));
  }, [dispatch, searchText]);

  const onListClick = (labslug) => {
    setSearchText(false);
    router.push({
      pathname: `/profilecart/${labslug}`,
      query: {
        keyword: setSearchText,
        tab: 1,
      },
    });
    // router.push({
    //   pathname: "/search",
    //   query: { tab: "tests", keyword: setSearchText },
    // });
  };

  const onAllResultClick = () => {
    setSearchText(false);
    router.push({
      pathname: "/search",
      query: { tab: "tests", keyword: setSearchText },
    });
  };

  return (
    <div className="searchDropDown">
      {status === "success" && (
        <div>
          {!!data.results.length && (
            <ul className="text-left">
              {data.results.map((item, index) => (
                <li
                  key={index}
                  onClick={() => onListClick(item.lab.slug)}
                  className="px-4"
                >
                  <div className="name m-0 text_p">
                    <strong>{item.name}</strong>
                  </div>
                  <p className="d-inline-block m-0">{item.lab.name}</p>
                </li>
              ))}
              <li
                className="px-4 d-flex align-items-center"
                onClick={onAllResultClick}
              >
                See All Results <i className="las la-arrow-right"></i>
              </li>
            </ul>
          )}
          {!data.results.length && (
            <ul className="text-left">
              <li className="px-4">No Results Found</li>
              <li className="px-4" onClick={onAllResultClick}>
                Try searching with different keyword
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchListShow;
