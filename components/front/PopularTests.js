import React from 'react'
import popularTests from './../../config/popular-tests.json';
import Test from "./Test";


function PopularTests() {
    return (

        <section className="popularTests services bgBlur">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="titlewrapper">
                            <h3 className="title text_p">Popular Tests</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="tests my-4">
                            {popularTests.map((test) => (
                                <Test
                                    key={test.id}
                                    title={test.name}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PopularTests