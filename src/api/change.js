import service from "@/utils/request";

/**
 * 获取部门信息
 */
export function GetDepartment(data) {
    return service.request({
        method: "get",
        url: "/change/depart",
        data: data
    })
}