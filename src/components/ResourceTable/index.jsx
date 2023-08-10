import siteResources from "../../configs/siteResourceConfig"
import { useGlobalState } from "../../hooks/globalState"
import { Table, Spinner } from "react-bootstrap"
import ResourceDeleteButton from "../ResourceDeleteButton"

export default function ResourceTable({isFetching, resource}) {
    const {data} = useGlobalState()
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th className="bg-dark text-white">#</th>
                    {siteResources[resource].fields.map(field => 
                        <th key={field.name} className="bg-dark text-white">{field.label}</th>
                    )}
                    <th className="bg-dark text-white">Action</th>
                </tr>
            </thead>
            <tbody>
                {data[resource] && data[resource].map((dt, idx) => {
                    return (
                        <tr>
                            <td>{idx+1}</td>
                            {siteResources[resource].fields.map(field => 
                                <td>{dt[field.name]}</td>
                            )}
                            <td>
                                <ResourceDeleteButton resource={resource} index={idx} />
                            </td>
                        </tr>
                    )
                })}
                {isFetching && <tr>
                    <td colSpan={siteResources[resource].fields.length+2} className="text-center">
                        <Spinner animation="border" />
                    </td>
                </tr>}
            </tbody>
        </Table>
    )
}