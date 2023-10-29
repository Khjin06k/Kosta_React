import { useState } from "react";
import{Form, Label, Input, FormGroup, FormText, Button, Col} from 'reactstrap';

function FromStrap(){
    return(
        <>
        <Form style={{ width: "800px", margin: "10px auto" }}>
            {/* 이메일 입력 */}
            <FormGroup row>
                {/* label의 경우 for로 forcus가 감 */}
                <Label for="examEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="examEmail" placeholder="email" />
                </Col>
            </FormGroup>

            {/* 비밀번호 입력 */}
            <FormGroup row>
                <Label for="examPassword" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="examPasswordl" placeholder="password" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examSelect" sm={2}>Select</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="examSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Col>
            </FormGroup>

            {/* textArea 입력 */}
            <FormGroup row>
                <Label for="examText" sm={2}>Text Area</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="examText" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examFile" sm={2}>File</Label>
                <Col sm={10}>
                    <Input type="file" name="file" id="examFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </Col>
            </FormGroup>

            {/* radio 버튼 입력 - 3개 중 한개*/}
            <FormGroup tag="fieldset">
                <legend> Radio Buttons </legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that-be sure to include wy it's great
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be somthis else and selecting it will deselect option one
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Option three is disabledß
                    </Label>
                </FormGroup>
            </FormGroup>

            {/* 체크박스 입력 */}
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> {' '}
                    check me out
                </Label>
            </FormGroup>

            {/* Form 태그 안에 있는 버튼은 전부 submit이 되어버림
            따라서 버튼 클릭시 이벤트로 관리를 해줘야 하며
            e.preventDefault()를 반드시 써 줘야 하며 return false도 소용 없음*/}
            <Button>Submit</Button>
        </Form>
        <br/><br/>
            <Form inline="true">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    {/* className으로 mr-sm-2로 해주었을 때 글씨와 input 사이에 살짝 떨어짐 */}
                    <Label for="examEmail2" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="examEmail2" placeholder="something@kosta.com" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examPassword2" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examPassword2" placeholder="don't tell!" />
                </FormGroup>
            </Form>
        </>
    )
}

export default FromStrap;