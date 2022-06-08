import { Form, Table } from "react-bootstrap";

function SizeTable() {

    return(
        <>         
        <Form>
            <Form.Group>
                <Form.Label className="fw-bold p-3 mt-1">
                <div className="text-muted">MEASUREMENTS</div>
                    <Table striped bordered hover size="lg">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>34</th>
                                        <th>36</th>
                                        <th>38</th>
                                        <th>40</th>
                                        <th className="text-center">42</th>
                                        <th className="text-center">44</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Waist measurement (cm)</td>
                                        <td>70</td>
                                        <td>74</td>
                                        <td>78</td>
                                        <td>82</td>
                                        <td className="text-center">86</td>
                                        <td className="text-center">86</td>
                                    </tr>
                                    <tr>
                                        <td>Hips measurement (cm) </td>
                                        <td>87</td>
                                        <td>91</td>
                                        <td>95</td>
                                        <td>99</td>
                                        <td className="text-center">103</td>
                                        <td className="text-center">107</td>
                                    </tr>
                                </tbody>
                    </Table>
                   
                </Form.Label>
                
            </Form.Group>        
        </Form>
        </>
    );
}

export default SizeTable;