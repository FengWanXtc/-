//themeriver

(function () {
    //实例化对象
    themerive();
    //指定数据

})();

function themerive() {
    var option = {
        backgroundColor: 'rgba(105, 105, 105, 0.5)',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#FFFFFF',
                    width: 2,
                    type: 'solid'
                }
            }
        },

        legend: {
           
            data: ['第一产业', '第二产业', '第三产业'],
			right: '10%',
			top: '5%',
			textStyle: {
				color: '#FFFAFF',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 30,
			}
        },


        singleAxis: {
            top: 0,
            bottom: 40,
            axisTick: {},
            color:'#FFFFFF',
            axisLabel: {
					interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
					//	margin:15,
					textStyle: {
						color: 'white',

						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 15,
					},
			},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true,
		
                }
            },
            nameTextStyle: {
                color: '#FFFFFF',
				fontSize:20,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color:'#FFFFFF',
                    opacity: 0.2
                }
            }
        },


        series: [
            {
                type: 'themeRiver',
                emphasis: {
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
	                   },					   
                },
				 label: {
					normal: {
						show: true,
						fontSize:20,
						color:"white",
							},
						},
                data: [
                ['2020/1/2', 6372.20, '第一产业'], ['2020/1/2', 339025.84, '第二产业'], ['2020/1/2', 255804.45, '第三产业'],
                ['2020/1/3', 6448.00, '第一产业'], ['2020/1/3', 339182.50, '第二产业'], ['2020/1/3', 256204.30, '第三产业'],
                ['2020/1/6', 6571.78, '第一产业'], ['2020/1/6', 340756.45, '第二产业'], ['2020/1/6', 255493.24, '第三产业'],
                ['2020/1/7', 6854.61, '第一产业'], ['2020/1/7', 343432.99, '第二产业'], ['2020/1/7', 258370.04, '第三产业'],
                ['2020/1/8', 6710.58, '第一产业'], ['2020/1/8', 341042.74, '第二产业'], ['2020/1/8', 253756.90, '第三产业'],
                ['2020/1/9', 6727.82, '第一产业'], ['2020/1/9', 345521.61, '第二产业'], ['2020/1/9', 257001.09, '第三产业'],
                ['2020/1/10', 6575.91, '第一产业'], ['2020/1/10', 345075.98, '第二产业'], ['2020/1/10', 256578.88, '第三产业'],
                ['2020/1/13', 6622.41, '第一产业'], ['2020/1/13', 349902.85, '第二产业'], ['2020/1/13', 258282.58, '第三产业'],
                ['2020/1/14', 6659.63, '第一产业'], ['2020/1/14', 348982.14, '第二产业'], ['2020/1/14', 257883.70, '第三产业'],
                ['2020/1/15', 6550.27, '第一产业'], ['2020/1/15', 348159.52, '第二产业'], ['2020/1/15', 256530.22, '第三产业'],
                ['2020/1/16', 6557.57, '第一产业'], ['2020/1/16', 347724.64, '第二产业'], ['2020/1/16', 258498.32, '第三产业'],
                ['2020/1/17', 6486.89, '第一产业'], ['2020/1/17', 347961.24, '第二产业'], ['2020/1/17', 258672.61, '第三产业'],
                ['2020/1/20', 6539.52, '第一产业'], ['2020/1/20', 352019.88, '第二产业'], ['2020/1/20', 261043.82, '第三产业'],
                ['2020/1/21', 6393.34, '第一产业'], ['2020/1/21', 348094.75, '第二产业'], ['2020/1/21', 256974.71, '第三产业'],
                ['2020/1/22', 6236.73, '第一产业'], ['2020/1/22', 350672.89, '第二产业'], ['2020/1/22', 257877.90, '第三产业'],
                ['2020/1/23', 5945.12, '第一产业'], ['2020/1/23', 340066.11, '第二产业'], ['2020/1/23', 250323.07, '第三产业'],
                ['2020/2/3', 5357.56, '第一产业'], ['2020/2/3', 312166.73, '第二产业'], ['2020/2/3', 230438.55, '第三产业'],
                ['2020/2/4', 5520.64, '第一产业'], ['2020/2/4', 318125.52, '第二产业'], ['2020/2/4', 233993.14, '第三产业'],
                ['2020/2/5', 5643.52, '第一产业'], ['2020/2/5', 325457.54, '第二产业'], ['2020/2/5', 237116.60, '第三产业'],
                ['2020/2/6', 5941.03, '第一产业'], ['2020/2/6', 332880.25, '第二产业'], ['2020/2/6', 242501.81, '第三产业'],
                ['2020/2/7', 5958.18, '第一产业'], ['2020/2/7', 334551.90, '第二产业'], ['2020/2/7', 244019.04, '第三产业'],
                ['2020/2/10', 6350.17, '第一产业'], ['2020/2/10', 337866.70, '第二产业'], ['2020/2/10', 245186.41, '第三产业'],
                ['2020/2/11', 6278.29, '第一产业'], ['2020/2/11', 339178.79, '第二产业'], ['2020/2/11', 245225.78, '第三产业'],
                ['2020/2/12', 6298.31, '第一产业'], ['2020/2/12', 343939.09, '第二产业'], ['2020/2/12', 247911.72, '第三产业'],
                ['2020/2/13', 6298.58, '第一产业'], ['2020/2/13', 342459.22, '第二产业'], ['2020/2/13', 245745.55, '第三产业'],
                ['2020/2/14', 6530.82, '第一产业'], ['2020/2/14', 343054.22, '第二产业'], ['2020/2/14', 247203.48, '第三产业'],
                ['2020/2/17', 6681.75, '第一产业'], ['2020/2/17', 352586.30, '第二产业'], ['2020/2/17', 253609.32, '第三产业'],
                ['2020/2/18', 6685.67, '第一产业'], ['2020/2/18', 355410.24, '第二产业'], ['2020/2/18', 253943.98, '第三产业'],
                ['2020/2/19', 6797.63, '第一产业'], ['2020/2/19', 353935.55, '第二产业'], ['2020/2/19', 252808.51, '第三产业'],
                ['2020/2/20', 6856.49, '第一产业'], ['2020/2/20', 360070.19, '第二产业'], ['2020/2/20', 258060.59, '第三产业'],
                ['2020/2/21', 6875.83, '第一产业'], ['2020/2/21', 363949.20, '第二产业'], ['2020/2/21', 258871.52, '第三产业'],
                ['2020/2/24', 6971.75, '第一产业'], ['2020/2/24', 367284.56, '第二产业'], ['2020/2/24', 258232.93, '第三产业'],
                ['2020/2/25', 7134.53, '第一产业'], ['2020/2/25', 367996.68, '第二产业'], ['2020/2/25', 256871.36, '第三产业'],
                ['2020/2/26', 7036.51, '第一产业'], ['2020/2/26', 359810.43, '第二产业'], ['2020/2/26', 254396.94, '第三产业'],
                ['2020/2/27', 7032.72, '第一产业'], ['2020/2/27', 360010.04, '第二产业'], ['2020/2/27', 255256.38, '第三产业'],
                ['2020/2/28', 6709.63, '第一产业'], ['2020/2/28', 344002.44, '第二产业'], ['2020/2/28', 245239.52, '第三产业'],
                ['2020/3/2', 6968.39, '第一产业'], ['2020/3/2', 356893.89, '第二产业'], ['2020/3/2', 252859.07, '第三产业'],
                ['2020/3/3', 6990.47, '第一产业'], ['2020/3/3', 360395.25, '第二产业'], ['2020/3/3', 254965.20, '第三产业'],
                ['2020/3/4', 7100.99, '第一产业'], ['2020/3/4', 360330.54, '第二产业'], ['2020/3/4', 257460.13, '第三产业'],
                ['2020/3/5', 7487.72, '第一产业'], ['2020/3/5', 367464.48, '第二产业'], ['2020/3/5', 261996.74, '第三产业'],
                ['2020/3/6', 7378.45, '第一产业'], ['2020/3/6', 365150.63, '第二产业'], ['2020/3/6', 257646.84, '第三产业'],
                ['2020/3/9', 7355.42, '第一产业'], ['2020/3/9', 351497.13, '第二产业'], ['2020/3/9', 249669.62, '第三产业'],
                ['2020/3/10', 7297.36, '第一产业'], ['2020/3/10', 359552.41, '第二产业'], ['2020/3/10', 254626.26, '第三产业'],
                ['2020/3/11', 7249.18, '第一产业'], ['2020/3/11', 354660.92, '第二产业'], ['2020/3/11', 251368.00, '第三产业'],
                ['2020/3/12', 6953.51, '第一产业'], ['2020/3/12', 345987.15, '第二产业'], ['2020/3/12', 248509.35, '第三产业'],
                ['2020/3/13', 6993.70, '第一产业'], ['2020/3/13', 341578.13, '第二产业'], ['2020/3/13', 245921.06, '第三产业'],
                ['2020/3/16', 6654.92, '第一产业'], ['2020/3/16', 327089.03, '第二产业'], ['2020/3/16', 236636.73, '第三产业'],
                ['2020/3/17', 6623.53, '第一产业'], ['2020/3/17', 325545.91, '第二产业'], ['2020/3/17', 236343.44, '第三产业'],
                ['2020/3/18', 6676.58, '第一产业'], ['2020/3/18', 320642.56, '第二产业'], ['2020/3/18', 231451.99, '第三产业'],
                ['2020/3/19', 6735.54, '第一产业'], ['2020/3/19', 320517.90, '第二产业'], ['2020/3/19', 230260.48, '第三产业'],
                ['2020/3/20', 6673.73, '第一产业'], ['2020/3/20', 325068.57, '第二产业'], ['2020/3/20', 233975.29, '第三产业'],
                ['2020/3/23', 6482.50, '第一产业'], ['2020/3/23', 312289.20, '第二产业'], ['2020/3/23', 226269.14, '第三产业'],
                ['2020/3/24', 6619.74, '第一产业'], ['2020/3/24', 319152.28, '第二产业'], ['2020/3/24', 231386.35, '第三产业'],
                ['2020/3/25', 6810.38, '第一产业'], ['2020/3/25', 327547.68, '第二产业'], ['2020/3/25', 236729.97, '第三产业'],
                ['2020/3/26', 6840.56, '第一产业'], ['2020/3/26', 325779.59, '第二产业'], ['2020/3/26', 235640.52, '第三产业'],
                ['2020/3/27', 6675.40, '第一产业'], ['2020/3/27', 326481.81, '第二产业'], ['2020/3/27', 235330.39, '第三产业'],
                ['2020/3/30', 6794.48, '第一产业'], ['2020/3/30', 321889.51, '第二产业'], ['2020/3/30', 231712.98, '第三产业'],
                ['2020/3/31', 7204.86, '第一产业'], ['2020/3/31', 324076.65, '第二产业'], ['2020/3/31', 231132.35, '第三产业'],
]
            }
        ]
    };
    //绑定数据
    myChart_Panel2_2.setOption(option);
}
