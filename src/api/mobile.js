import service from "@/utils/request";

/**
 * 原有axios请求方式
 * 对比和封装之后的请求方式
    this.$axios
    .get("/basic/pctype")
    .then(res => {
        this.pctype = res.data;
    })
    .catch(err => {
        console.log("调用错误", err);
    });
*/


/**
 * 获取位置（大楼）信息
 */
export function GetBuild(data) {
    return service.request({
        method: "get",
        url: "/mobile/build",
        data: data
    })
}

/**
 * 获取事件类型信息
 */
export function GetType(data) {
    return service.request({
        method: "get",
        url: "/mobile/pctype",
        data: data
    })
}

/**
 * 获取操作系统类型
 */
export function GetOS(data) {
    return service.request({
        method: "get",
        url: "/mobile/ostype",
        data: data
    })
}

/**
 * 查看事件信息
 */
export function CatEvent(data) {
    return service.request({
        method: "get",
        url: "/mobile/show",
        data: data
    })
}


/**
 * 添加事件信息
 */
export function AddEvent(data) {
    return service.request({
        method: "post",
        url: "/mobile",
        data: data,
        auth: {
            username: sessionStorage.getItem('token')
        }
    })
}


/**
 * 绘制报表信息
 */
export function GetReport(data) {
    return service.request({
        method: "get",
        url: "/mobile/report",
        data: data
    })
}




/**
 * 前端类型为Form表单时
 *
 *
this.$axios({
method: "post",
url: "/event/add",
headers: {
    "Content-type": "application/x-www-form-urlencoded"
},
data: {
    date: this.ruleForm.date1,
    time: this.ruleForm.date2,
    location_name: this.ruleForm.location_name,
    room: this.ruleForm.room,
    type_name: this.ruleForm.type_name,
    process_time: this.ruleForm.process_time,
    os_name: this.ruleForm.os_name,
    content: this.ruleForm.content,
    solution: this.ruleForm.solution
},
// 转换
transformRequest: [
    function(data) {
    let ret = "";
    for (let it in data) {
        ret +=
        encodeURIComponent(it) +
        "=" +
        encodeURIComponent(data[it]) +
        "&";
    }
    return ret;
    }
]
})
.then(res => {
    if (res.status === 200 || res.status === 302) {
        this.active = 4;
    }
})
.catch(err => {
    console.log("调用错误", err);
});
 */