var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2645292",
        "ok": "2645292",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4155",
        "ok": "4155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles2": {
        "total": "188",
        "ok": "188",
        "ko": "-"
    },
    "percentiles3": {
        "total": "518",
        "ok": "518",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 2641126,
        "percentage": 100
    },
    "group2": {
        "name": "1000 ms < t < 2000 ms",
        "count": 3919,
        "percentage": 0
    },
    "group3": {
        "name": "t > 2000 ms",
        "count": 247,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17635.28",
        "ok": "17635.28",
        "ko": "-"
    }
},
contents: {
"req_servlet-a0c5c": {
        type: "REQUEST",
        name: "servlet",
path: "servlet",
pathFormatted: "req_servlet-a0c5c",
stats: {
    "name": "servlet",
    "numberOfRequests": {
        "total": "2645292",
        "ok": "2645292",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4155",
        "ok": "4155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles2": {
        "total": "188",
        "ok": "188",
        "ko": "-"
    },
    "percentiles3": {
        "total": "518",
        "ok": "518",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 2641126,
        "percentage": 100
    },
    "group2": {
        "name": "1000 ms < t < 2000 ms",
        "count": 3919,
        "percentage": 0
    },
    "group3": {
        "name": "t > 2000 ms",
        "count": 247,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17635.28",
        "ok": "17635.28",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
