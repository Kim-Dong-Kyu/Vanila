// -----------------------차트 설정 시작-----------------------
 
// rMateChart 를 생성합니다.
// 파라메터 (순서대로)
//  1. 차트의 id ( 임의로 지정하십시오. )
//  2. 차트가 위치할 div 의 id (즉, 차트의 부모 div 의 id 입니다.)
//  3. 차트 생성 시 필요한 환경 변수들의 묶음인 chartVars
//  4. 차트의 가로 사이즈 (생략 가능, 생략 시 100%)
//  5. 차트의 세로 사이즈 (생략 가능, 생략 시 100%)
rMateChartH5.create("chart1", "chartHolder", "", "100%", "100%");
 
// 스트링 형식으로 레이아웃 정의. 
var layoutStr =
             '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                   +'<Options>'
                      +'<Caption text="Sales and ROI"/>'
                        +'<Legend useVisibleCheck="true"/>'
                   +'</Options>'
                 +'<NumberFormatter id="numFmt1" useThousandsSeparator="true"/>'
                   +'<CurrencyFormatter id="numFmt2" precision="0" currencySymbol="%" alignSymbol="right"/>'
                 +'<Combination2DChart showDataTips="true" dataTipJsFunction="dataTipJsFunc">'
                 /*
                      Combination2D 차트 생성시에 필요한 Combination2DChart 정의합니다
                      showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다
                 */
                      +'<horizontalAxis>'
                           +'<CategoryAxis categoryField="Month" padding="0.5"/>'
                        +'</horizontalAxis>'
                      +'<verticalAxis>'
                         +'<LinearAxis id="vAxis1" formatter="{numFmt1}"/>'
                        +'</verticalAxis>'
                        +'<series>'
                           +'<Column2DSeries labelPosition="outside" yField="sales" displayName="Sales" showValueLabels="[5]">'
                              +'<fill>'
                                 +'<SolidColor color="#41b2e6"/>'
                              +'</fill>'
                                +'<showDataEffect>'
                                   +'<SeriesInterpolate/>'
                               +'</showDataEffect>'
                          +'</Column2DSeries>'
                          +'<Line2DSeries radius="6" yField="roi" displayName="ROI" itemRenderer="CircleItemRenderer">'
                             +'<verticalAxis>'
                                 +'<LinearAxis id="vAxis2" formatter="{numFmt2}"/>'
                                +'</verticalAxis>'
                                +'<showDataEffect>'
                                   +'<SeriesInterpolate/>'
                               +'</showDataEffect>'
                              +'<lineStroke>'
                                   +'<Stroke color="#f9bd03" weight="4"/>'
                               +'</lineStroke>'
                              +'<stroke>'
                                   +'<Stroke color="#f9bd03" weight="3"/>'
                               +'</stroke>'
                          +'</Line2DSeries>'
                        +'</series>'
                      +'<verticalAxisRenderers>'
                            +'<Axis2DRenderer axis="{vAxis1}" showLine="false"/>'
                         +'<Axis2DRenderer axis="{vAxis2}" showLine="false"/>'
                     +'</verticalAxisRenderers>'
                   +'</Combination2DChart>'
              +'</rMateChart>';
 
// 차트 데이터
var chartData =
[{"Month":"Jan","sales":200,"roi":61},
{"Month":"Feb","sales":300,"roi":35},
{"Month":"Mar","sales":420,"roi":30},
{"Month":"Apr","sales":550,"roi":32},
{"Month":"May","sales":620,"roi":29},
{"Month":"Jun","sales":720,"roi":22},
{"Month":"Jul","sales":880,"roi":20},
{"Month":"Aug","sales":990,"roi":25},
{"Month":"Sep","sales":1000,"roi":19},
{"Month":"Oct","sales":1100,"roi":18},
{"Month":"Nov","sales":1220,"roi":16},
{"Month":"Dec","sales":1440,"roi":15}];
 
// rMateChartH5.calls 함수를 이용하여 차트의 준비가 끝나면 실행할 함수를 등록합니다.
//
// argument 1 - rMateChartH5.create시 설정한 차트 객체 아이디 값
// argument 2 - 차트준비가 완료되면 실행할 함수 명(key)과 설정될 전달인자 값(value)
// 
// 아래 내용은 
// 1. 차트 준비가 완료되면 첫 전달인자 값을 가진 차트 객체에 접근하여
// 2. 두 번째 전달인자 값의 key 명으로 정의된 함수에 value값을 전달인자로 설정하여 실행합니다.
rMateChartH5.calls("chart1", {
    "setLayout" : layoutStr,
    "setData" : chartData
});
 
function dataTipJsFunc (seriesId, seriesName, index, xName, yName, data, values) {
  if (seriesName == "ROI")
        return data['Month'] + "
ROI : " + "<b>" + data['roi'] + "%</b>";
  else
        return data['Month'] + "
Sales : " + "<b>$" + data['sales'] + "M</b>";
}
 
/**
 * rMateChartH5 3.0이후 버전에서 제공하고 있는 테마기능을 사용하시려면 아래 내용을 설정하여 주십시오.
 * 테마 기능을 사용하지 않으시려면 아래 내용은 삭제 혹은 주석처리 하셔도 됩니다.
 *
 * -- rMateChartH5.themes에 등록되어있는 테마 목록 --
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * -------------------------------------------------
 *
 * rMateChartH5.themes 변수는 theme.js에서 정의하고 있습니다.
 */
rMateChartH5.registerTheme(rMateChartH5.themes);
 
/**
 * 샘플 내의 테마 버튼 클릭 시 호출되는 함수입니다.
 * 접근하는 차트 객체의 테마를 변경합니다.
 * 파라메터로 넘어오는 값
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default : 테마를 적용하기 전 기본 형태를 출력합니다.
 */
function rMateChartH5ChangeTheme(theme){
    document.getElementById("chart1").setTheme(theme);
}
 
// -----------------------차트 설정 끝 -----------------------