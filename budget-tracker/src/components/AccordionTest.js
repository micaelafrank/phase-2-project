import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import {displayBudget, addedPaychecks, addedExpense, balance} from "./Home";

function AccordionTest(){
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Your budget for {new Date().toLocaleString("en-US", { month: "long" })}:</Accordion.Header>
                <Accordion.Body>
                ${displayBudget}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Your earnings for {new Date().toLocaleString("en-US", { month: "long" })}:</Accordion.Header>
                <Accordion.Body>
                ${Math.abs(addedPaychecks)}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Your total spending in {new Date().toLocaleString("en-US", { month: "long" })} so far:</Accordion.Header>
                <Accordion.Body>
                ${addedExpense}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Your remaining balance for {new Date().toLocaleString("en-US", { month: "long" })}:</Accordion.Header>
                <Accordion.Body>
                ${balance}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionTest;