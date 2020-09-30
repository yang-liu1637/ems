const jsonServer = require('ymock-json');
jsonServer.get('/parkticketmng/parkticket/getparkticketlist',index());
jsonServer.jsonMock(8090);

function index(){
    var a = {"ticketsPriceRevisionList": [
        {
            "ticketPriceRevisionId": "TPRI003",
            "displayName": "料金改定日表示名3",
            "ticketPriceRevisedDate": "2020/09/13"
        },
        {
            "ticketPriceRevisionId": "TPRI001",
            "displayName": "料金改定日表示名1",
            "ticketPriceRevisedDate": "2020/08/13"
        },
        {
            "ticketPriceRevisionId": "TPRI002",
            "displayName": "料金改定日表示名2",
            "ticketPriceRevisedDate": "2019/10/13"
        }
    ],
    "parkSpielInfoList": [
        {
            "calendarDate": "2020/08/18",
            "parkDiv": "LOP001",
            "congestionRank": "B",
            "specificFlg": "1",
            "datedTicketOnly": "0",
            "starlightPassport": "1",
            "afterSixPassport": "1",
            "summerFivePassport": "1",
            "extraFunPassport": "1",
            "storeSoldOutDate": "2020/09/12 15:26",
            "onlineSoldOutDate": "2020/09/04 15:30",
            "openTime": "07:30",
            "closeTime": "22:30",
            "soldoutSituationCd": "1",
            "simpleSpiel": "あいうえお、なにぬねの\nThis is English statement.",
            "detailFutureSpiel": null,
            "detailTodaySpiel": null
        },
        {
            "calendarDate": "2020/08/19",
            "parkDiv": "LOP002",
            "congestionRank": "A",
            "specificFlg": "0",
            "datedTicketOnly": "0",
            "starlightPassport": "1",
            "afterSixPassport": "1",
            "summerFivePassport": "1",
            "extraFunPassport": "1",
            "storeSoldOutDate": "2020/09/03 16:08",
            "onlineSoldOutDate": "2020/09/05 16:08",
            "openTime": "08:30",
            "closeTime": "23:30",
            "soldoutSituationCd": "1",
            "simpleSpiel": null,
            "detailFutureSpiel": null,
            "detailTodaySpiel": null
        }
    ],
    "parkTicketList": [
        {
            "ticketClassCode": "01",
            "divisionName": "1デーパスポート",
            "parkTicketClassList": [
                {
                    "risTicketCode": "RTC01",
                    "ticketName": "チケット名１",
                    "ticketPricePatternId": "TPPI001",
                    "ticketPricePatternName": "料金パータン1",
                    "ticketPriceRevisionList": [
                        {
                            "ticketPriceRevisionId": "TPRI002",
                            "ticketPriceList": [
                                {
                                    "ageDiv": "0",
                                    "ticketPrice": "9999999"
                                }
                            ]
                        },
                        {
                            "ticketPriceRevisionId": "TPRI001",
                            "ticketPriceList": [
                                {
                                    "ageDiv": "0",
                                    "ticketPrice": "9999999"
                                }
                            ]
                        }
                    ],
                    "ticketDetailList": [
                        {
                            "displayOrder": "1",
                            "ticketDetailId": "TDI001",
                            "ticketDetailName": "チケット明細名称１",
                            "parkAppointTypeCode": "2",
                            "datedTicketOnlyDayEnableCode": "1",
                            "advanceTicketContinueCode": "0",
                            "enterLimitPurchaseCode": "0",
                            "advanceOrDayTicketDiv": "3",
                            "datedTypeCode": "0",
                            "ticketSalesPlaceList": [
                                {
                                    "saleStartDateTime": "2020-08-18 12:52:18.0",
                                    "saleEndDateTime": "2020-08-31 12:52:24.0",
                                    "ticketSalesPlaceTypeCode": "10"
                                }
                            ]
                        }
                    ],
                    "salesStatus": "4",
                    "salesTerm": "2020/08/18～2020/08/31",
                    "remarks": "チケット販売場所１"
                }
            ]
        }
    ]
}
return a
}
