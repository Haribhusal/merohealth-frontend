import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { userActions } from "../../services/user/action";
import Image from "next/image";

import Link from "next/link";
import ToastMessage from "../Message";
import { REMOVE_CART_RESET } from "../../services/user/types";
import Loading from "../Loading";

const CartHeader = ({ token, dispatch, user }) => {
  const {
    data: cartData,
    loading: cartLoading,
    status: cartStatus,
  } = user.getCart;

  const {
    data: removeCartData,
    loading: removeCartLoading,
    status: removeCartStatus,
  } = user.removeCart;

  const [open, setOpen] = useState(false);
  // show toast message
  const [show, setShow] = useState(false);

  const removeCart = (id) => {
    if (token) {
      dispatch(userActions.removeCart(id));
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(userActions.getCart());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      if (removeCartStatus === "success") {
        setShow({
          bg: "danger",
          message: "Cart Item Deleted Successfully!",
        });
        setTimeout(() => {
          setShow(false);
          dispatch({ type: REMOVE_CART_RESET });
          dispatch(userActions.getCart());
        }, 1500);
      }
    }
  }, [dispatch, removeCartStatus, token]);

  return (
    <li
      className="nav-item cartMenu d-flex align-items-center"
      title="Check your cart and checkout"
      onClick={() => setOpen(!open)}
    >
      {removeCartLoading && <Loading />}
      {show && (
        <ToastMessage
          bg={show.bg}
          message={show.message}
          show={show}
          setShow={setShow}
        />
      )}
      {cartStatus === "success" && (
        <>
          {cartData.count !== 0 && (
            <span className="count">{cartData.count}</span>
          )}
        </>
      )}
      <Dropdown>
        <Dropdown.Toggle
          variant="default"
          className="user-menu d-flex align-items-center m-0 p-0"
          id="dropdownMenuButton"
        >
          <span className="nav-link nav-link-message">
            <i className="las la-shopping-bag"></i>
          </span>
        </Dropdown.Toggle>
        {open && (
          <div className="dmenu" onClick={(e) => e.stopPropagation()}>
            <div className="cart_heading d-flex justify-content-between align-items-center">
              <div className="leftheading">
                <strong>Cart Summary</strong>
              </div>
              <button className="closeCart" onClick={() => setOpen(!open)}>
                <i className="las la-times"></i>
              </button>
            </div>

            {cartStatus === "success" && (
              <div className="items">
                {cartData.results.map((item, index) => (
                  <div key={index} className="item">
                    <i className="las la-flask mt-2"></i>
                    <span className="testitem">
                      <div className="label">
                        {item.service.lab_test
                          ? item.service.lab_test?.test?.name
                          : item.service.lab_package?.name}
                      </div>
                      <span
                        className="small text-muted"
                        title="Visit Lab Profile"
                      >
                        From
                        <Link
                          href={`/profile/${item.service.lab_test.lab.slug}`}
                        >
                          <a
                            style={{
                              marginLeft: "5px",
                              display: "inline-block",
                            }}
                          >
                            {item.service.lab_test.lab.name}
                          </a>
                        </Link>
                      </span>
                      <span className=" d-flex cat small">
                        <div className="amount"> Rs. {item.final_amount}</div>
                      </span>
                    </span>
                    <i
                      onClick={() => removeCart(item.id)}
                      className="las la-trash"
                    ></i>
                  </div>
                ))}

                {cartData.count === 0 && (
                  <div className="item font-weight-bold py-4 text-center d-flex justify-content-center flex-column align-items-center">
                    {cartLoading && "Loading.."}
                    <Image
                      src="/media/cart-empty.svg"
                      height={100}
                      width={100}
                      layout="fixed"
                    />
                    <h5>
                      No items in your cart. <br />
                    </h5>
                    <p className="text-muted small">
                      Please add some services in your cart
                    </p>
                    <Link
                      href={{ pathname: "/search", query: { keyword: "" } }}
                    >
                      <a className="btn btn_p">
                        <i className="las la-plus"></i> Add Services
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            )}
            {cartData.count !== 0 && (
              <div className="cart_footer d-flex justify-content-between align-items-center">
                {cartStatus === "success" && (
                  <div className="left">
                    <div className="cartTotal d-flex flex-column">
                      <strong className="text_p">
                        Rs. {cartData.total.final_amount}
                      </strong>
                      <span className="text-muted small">
                        Today&apos; Total
                      </span>
                    </div>
                  </div>
                )}

                {cartStatus === "success" && (
                  <div className="right">
                    <Link href="/payment">
                      <a>
                        <button className="btn btn_small btn_s px-3">
                          Checkout <i className="las la-angle-right"></i>
                        </button>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Dropdown>
    </li>
  );
};

export default CartHeader;
