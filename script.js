
function openNewWindow(url){
    const newWindow = window.open(url);
    newWindow.focus();
}

function reset_page(html){
    cards = document.getElementById('cards')
    const contaner = document.createElement('div');
    contaner.id = 'cards'
    cards.replaceWith(contaner)
    contaner.innerHTML = html
}


function get_file_html(title,org,link, type, path){
    dic_parts = path.split('/')
    func_path = `source['children']`
    for (i in dic_parts)
        if (dic_parts[i]!='') {
            func_path += `['${dic_parts[i]}']['children']`
        }

    img = ''
    if (type.includes('fol')) { img = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="card-title bi bi-folder2 inline" viewBox="0 0 16 16">
      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
    </svg>`;
    big_button = ` `;
    small_button = `onclick="switch_to_dic(${func_path})" `;
    }
    else { img = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-font-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5l.057-2z"/>
</svg>`;
    big_button = `onclick="openNewWindow('${link}')" `;
    small_button = ``;
    }

     return `
    <div class="card file_card" ${big_button}>
    <div class="card-body d-flex align-items-center ">
        <div class=" inline btn btn-light d-flex align-items-center" onclick="openNewWindow('${link}')" >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download inline" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
          </div>
        <div style="width: 10px;"></div>
        <div ${small_button} class="d-flex align-items-center "  style="padding-top: 7px; padding-bottom: 7px" >

${img}
        <h5 class="card-title ml-2 title-case" style="padding-right: 2px; padding-left: 10px;">${title}</h5>
            <div style="width: 30px;"></div>
        <h6 class="card-subtitle ml-2 text-body-secondary text-muted title-case" >${org}</h6>

            </div>
          </div>
    </div>
    `
}

function info_card_html(info){

    return ` <div class="card file_card" >
  <div class="card-body">

   

${info}
<div style="padding-top: 30px">
    <p  class="font-weight-light inline " style="    font-size: 14px; font-style: italic;" >If you have any resources or tips about this class/subject please email</p>
    <a class="font-weight-light inline " style="    font-size: 14px; font-style: italic;"  href="mailto:touroresources@gmail.com">touroresources@gmail.com</a>
    <p  class="font-weight-light inline " style="    font-size: 14px; font-style: italic;" >Every contribution makes a difference!</p>
</div>
  </div>
</div>`
    }

function get_back_button_path(str) {
    // console.log(str)
  arr = str.split('/')
  newarr= arr.slice(0, arr.length - 1);
  // console.log(newarr.length)
  ht = `source['children']`
      if (newarr.length > 0){

        for (i in newarr) {
            if (newarr[i] != '') {

            ht += `['${newarr[i]}']['children']`
        }
        }
    }
  return ht
}
function back_button_card(text, path, parent){
    if (text != '/'){
        // console.log(text)
    return `    <div style="display: flex; justify-content: left; ">
        <button  onclick="switch_to_dic(${path})" type="button" class="btn btn-secondary file_card"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> ${parent} </button>
        <div class="card col-lg-10 thick-border"" style="display: inline-block;  margin-left: 30px; margin-right:30px;">
  <div class="card-body col-lg-10 " style="display: flex padding-left: 30px; text-align: center; ">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="card-title bi bi-folder2 inline" viewBox="0 0 16 16">
      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
    </svg>
    <strong class="title-case" >${text}</strong> 
  </div>
</div>
    </div>`}
    else {return ''}
}

function getLastNonEmptyItem(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
      return arr[i];
    }
  }
  // Return a default value or handle the case where there are no non-empty items.
  return '/';
}
function getSecondLastNonEmptyItem(arr) {
    one = false
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
        if (one == true){return arr[i];}
        else {one = true}
    }
  }
  // Return a default value or handle the case where there are no non-empty items.
  return '/';
}


function switch_to_dic(dict){
    html = info_card_html(dict['info'])
    cards_html = ''
    back_text = ''
    parent = ''



    for (const key in dict) {
         if (typeof dict[key] === "object" && !Array.isArray(dict[key])) {
             title = key
             type = dict[key]['type']
             parts = dict[key]['path'].split('/')
             org = getLastNonEmptyItem(dict[key]['path'].split('/'))
             back_text = get_back_button_path(dict[key]['path'])
             url = dict[key]['url']
             path =  dict[key]['path'] +'/' +key
             cards_html += get_file_html(title, org, url, type ,path)
             parent = getSecondLastNonEmptyItem(dict[key]['path'].split('/'))

         }}
         html += back_button_card(org ,back_text, parent)
        html += cards_html
    console.log(parent)
        reset_page(html)
  // console.log(org);


}source = { children: {'Psychology&Sociology': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1LQkYsrCXDU21y4_iABl9wgv_4KnRqPbw', 'path':'' , 'children': {'Sociology 101': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1oMc1i77LBTyPE7iUf_7_7csbUEXKE6SH', 'path':'Psychology&Sociology' , 'children': {'Sociology 101 W Verbit': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1QCazLyvvZzVOVaGKi-QF0QBGFPeQXM0I', 'path':'Psychology&Sociology/Sociology 101' , 'children': {'Spring 2023 midterm prompt.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1VQ2lrnyANdrlxa57_JLwIYL_iw4vyQbk/view?usp=drivesdk', 'path':'Psychology&Sociology/Sociology 101/Sociology 101 W Verbit' , 'children': {} } ,'Fall 2022 Final promt.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1lHjz33L4pcD9oZIpmJ0vdjVGIBGKK7tn/view?usp=drivesdk', 'path':'Psychology&Sociology/Sociology 101/Sociology 101 W Verbit' , 'children': {} } ,'Fall 2022 Essay Promt.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1wj_U3z0_109DvyAMrxqcAtAmArlNaGwi/view?usp=drivesdk', 'path':'Psychology&Sociology/Sociology 101/Sociology 101 W Verbit' , 'children': {} } ,'info':`<p>Advice from previous students who have taken this course:
<br>
you can use your notes during the tests, so you don't have to worry about memorizing everything. Understanding the concepts is what matters most. And getting an 'A' in this class is definitely doable if you work hard.
    <br>
</p>

<a href="https://www.ratemyprofessors.com/professor/1218760" target="_blank" >See What Students are saying about the professor</a>
`}  } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'Chemistries': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1Hd757UxwpTH0vZWl-CtHsrFL160bjoLZ', 'path':'' , 'children': {'General Chemistry': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1tNRa_-zjg6ggS9EbjBEVfuJVJjvPu_-y', 'path':'Chemistries' , 'children': {'Gen Chem W Ron': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1P4_uVmqnXIUoNPHBJJWbIHj9C_uoiSMI', 'path':'Chemistries/General Chemistry' , 'children': {'exams': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1gdrUNsqp3PMfdrAmxk5Do_rS_efbD-jO', 'path':'Chemistries/General Chemistry/Gen Chem W Ron' , 'children': {'Chem2 ': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1Eqk5MVrIHYCFAKAxPu0FC_iZfnZ-5RHJ', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams' , 'children': {'FInal': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1k0rkyctAK7FVc5sCBFW6SqemBcvYNBiv', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 ' , 'children': {'Final-Exam-102-Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1mt2lBxL0sXVf4cAEFPc20hEPWBdR1RGa/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /FInal' , 'children': {} } ,'Final_Exam_102_Spring2020 (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1CFTeeW47Pl3FCTtfg-HCPdVlN88sLv3S/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /FInal' , 'children': {} } ,'Final_Exam_102_Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/15w4rQjLhAQNU9bz4GcqCjhrr-n7NrNny/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /FInal' , 'children': {} } ,'Final_Exam_102_Spring2020 (1) (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1KUIHikmJMRtPQuwwPDkgXQ5stbiq9eB7/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /FInal' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Exam 3': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/14QAdauVoeCqluCnghVwyVZ77ohu4uzFY', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 ' , 'children': {'Exam_3_102_Spring2020_Key.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1-l9asKns4fN-eftJm4gBSCVmDcoelfHW/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 3' , 'children': {} } ,'Exam_3_102_LAS_Spring_2021 (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1vDTPuYImpWewNZr_6l9K_zQ2YvinBeEg/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 3' , 'children': {} } ,'Exam_3_102_Spring_2020_LAS.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1Rla_eP6XLuDkDgc_KNxH8hUBMKCJ87ex/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 3' , 'children': {} } ,'Test 3 Ron Mesorah.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1SO6QSN0VOoEipTho_7I_P33VPYNEOHA1/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 3' , 'children': {} } ,'Exam3_102_PracticeExam.docx': 	 {'type': 'file', 'url': 'https://docs.google.com/document/d/1bzl1IhJ61EKPIUtIbreD754kiIqOOcVr/edit?usp=drivesdk&ouid=104230046847318905911&rtpof=true&sd=true', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 3' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Exam 2': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1MPfF2Fr5jxztDuAZWE7y8848_Wpa8zzg', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 ' , 'children': {'chem2 test 2.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1GpRUNm05VdomTQUOJbxNFM6k1USKc5d9/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Exam_2_102_Spring2020 (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1cNutIZOSV82xB9MwvvCMy-LYsHhYDoOC/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Test 2 Ron Mesorah.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1G4d3mitr9EBsFWUsJGp5kPs5KQKp51R3/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Exam_2_102_Spring2020_Key (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1T_DXnMPQYGIrgtvbvZQm2D9WRqI8YwZN/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'exam_2_spring_2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1ca95NiWATGjEAgK4IZFx__kH6y3e-g7A/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Exam_2_102_SMR2_2020.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1MvMVIkPXCnO8bEjthPtI4RClkLfMh-vT/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Exam_2_102_Spring2020_Key.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1C47Gt31QxHjhVnS-XHx82nk60P6BDNC9/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'7-28-23, 135 PM Microsoft Lens.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1ylJzmdSs5h3P271lNoI4atMv7apwsQU6/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'Exam_2_102_SMR2_2020 (1).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1HrhsPKOSbQeO5pvrgtMMTup7QNz3HZB5/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /Exam 2' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'exam 1': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/17XP2Ib4svmFMaUi2frvQdT49_39Y5Vcb', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 ' , 'children': {'parts from 3 tests.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1SO2eo8S9qbIh0VQ60VBnlg8EMzs6IsPh/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'exam 1.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1w40oYP6dXly1_QAvmuywiwCJe_t8TJu9/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'chem 2 test 1.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/18MButlw8_Gx5LMujkeagxbvV95pUNOz1/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'Exam_1_102_spring2020_key.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1WSiv5wFEgXRr58racMNwVQFvYP4iXvk8/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'Exam_1_LAS_Men_SMR2_2020.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1rD2eKty-JBUunEscaPXZtn0yaFaimRWV/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'part1 -1.jpg': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1lQ-_jw57gtFSFfcOxlVQopaabe-MLBKP/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem2 /exam 1' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'Chem 1': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1X4-VIBiZnvhFz5N5wj8T8M7Y2BM4jbrt', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams' , 'children': {'Exam 2': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/10i7l9iwv_GEa8TI7orTxFwLFyR4PsLUT', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1' , 'children': {'exam 2.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1XwxIR2iKwU2zaChM-yqrS3SZYhOT_kpO/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 2' , 'children': {} } ,'chem1 test 2.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1aRN3D2oN2tSdHHAR3LSALWGSZGWLmSbL/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 2' , 'children': {} } ,'EX2 summer 2022.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/14WRQiCccWFGA7tt2kuvCB-bzGfUdsAYP/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 2' , 'children': {} } ,'Exam_2_Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/16FRT-wJW64qFwzYiG7Z-YL6M906f-Iwm/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 2' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'FInal': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1wuW3LREw5kehnAfb8p9gzVLTT7uiV9ef', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1' , 'children': {'Chem 1- Final .pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1jmGbyiMexZ1yWLDRaozEgr3pgFSpGnhB/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/FInal' , 'children': {} } ,'Exam_Final_Fall2020.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/18_cGuhOZUmjUQNzrDCY3fapbzmM2RrSq/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/FInal' , 'children': {} } ,'Exam_Final_LAS_Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1FQLwtq0HkXWUboe6O-kCZ7OPQqj2HZKJ/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/FInal' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'exam 1': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/19ihvXtv64nVSwTkVhgPmIbOK2wk4po9A', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1' , 'children': {'chem 1 test 1 .pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1tNuskkNwyyqpd7yuLd1hVnGbve8gMGYk/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/exam 1' , 'children': {} } ,'Chem 1 test 1 (Summer2023) .pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1aCgfhEfP72uNKBW-seY4L_fgwM3_OBkV/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/exam 1' , 'children': {} } ,'Chem 1- Exam 1 Answers.docx': 	 {'type': 'file', 'url': 'https://docs.google.com/document/d/1Lt2rJ8UR1hW75TzlzJE6Z44LOth636aC/edit?usp=drivesdk&ouid=104230046847318905911&rtpof=true&sd=true', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/exam 1' , 'children': {} } ,'Exam_1_Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1PzC-THMX1d6muq9M-EV42X82apaWFhdn/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/exam 1' , 'children': {} } ,'Chem 1- Exam 1.docx': 	 {'type': 'file', 'url': 'https://docs.google.com/document/d/1PI0nxGI2Y4j9Mssm5S4SgERhY0y_FNu5/edit?usp=drivesdk&ouid=104230046847318905911&rtpof=true&sd=true', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/exam 1' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Exam 3': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1uyxWUJ_gX8yHZ2kifUw-l_WlvZGZ559V', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1' , 'children': {'exam 3.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1QPaZPOtD0Qvzs9oQ7CZ9WndXLpBYIX8b/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 3' , 'children': {} } ,'Exam_3_Spring2021.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/13nmATlDCmM5lms8wj4hHjNK5UtquBB8Z/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 3' , 'children': {} } ,'Chem Exam 3.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1ZPF8AqyynYyNa56QoEiuVWmvqUNNykNj/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/Gen Chem W Ron/exams/Chem 1/Exam 3' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'info':`<p>Advice from previous students who have taken this course:
<br>
There are three tests plus a final each semester, with the option to drop one (not the final). It is advisable to focus on excelling in the first test (both semesters), as it is typically the easiest. Reserve the test that you can drop for later in the semester.
<br>
Be prepared for the fact that the test questions are considerably more challenging than the examples the professor provides during class.
<br>
The best way to study for this class is to do problems in the back of each chapter and practice with previous semesters' tests (note that tests are not reused).</p>
<a href="https://www.ratemyprofessors.com/professor/2072073" target="_blank" >See What Students are saying about the professor</a>
`}  } ,'book - 12th edition ': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1Rx0FONCfmzsoK7rt-V8X_bjF1h1oQAvg', 'path':'Chemistries/General Chemistry' , 'children': {'Book .pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1Lws-FRXa__baYhf7GYvAVSgcABrM41oZ/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/book - 12th edition ' , 'children': {} } ,'answers.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/13AJIlgRL4Hu863JvamFHXOShv_FqXx9a/view?usp=drivesdk', 'path':'Chemistries/General Chemistry/book - 12th edition ' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Student Solutions Manual for Chemistry: The Central Science.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/19h14CulA8qMaiFpXLhqoCQBC4WJLwigT/view?usp=drivesdk', 'path':'Chemistries/General Chemistry' , 'children': {} } ,'PearsonChemistryTheCentralScience14thEdition.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1IJEQg2j7K2xG_kbFrXRBfBKnCPCCtp6_/view?usp=drivesdk', 'path':'Chemistries/General Chemistry' , 'children': {} } ,'lab manual.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1J7UTGwDlZsxzWhSkEw0kyOQHLkQXvWhx/view?usp=drivesdk', 'path':'Chemistries/General Chemistry' , 'children': {} } ,'periodic_table_multicoloured.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1QLEbbPwWBZhA2owC2KaZpBPM22BP2Mkd/view?usp=drivesdk', 'path':'Chemistries/General Chemistry' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Organic Chemistry': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/15aIzmgVNwK2shAMgA9xr9FG79ZhI9kVe', 'path':'Chemistries' , 'children': {'soultions book .pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1OWefBFjIcszoIUyUI0zYgkPkTyaBNHFI/view?usp=drivesdk', 'path':'Chemistries/Organic Chemistry' , 'children': {} } ,'Orgo Book.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1cfyOrNTWOhg_ZiT5VcnncJfRtNl5_I1_/view?usp=drivesdk', 'path':'Chemistries/Organic Chemistry' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'Biologies': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1HfFaQIbM-hcXxsV9MPovDigtwjL1KAlJ', 'path':'' , 'children': {'Bio 101-102': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1H7XpPu6kDqOIGlnpxW13FCrknfmYcTdU', 'path':'Biologies' , 'children': {'Campbell Biology, 12th Edition.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1zNemBjfSTFtl_eyQHRo6AnXchfpifbKn/view?usp=drivesdk', 'path':'Biologies/Bio 101-102' , 'children': {} } ,'Biology Laboratory Manual-Darrell Vodopich, Randy Moore - -McGraw-Hill Education (2019).pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1G_fhqTRPpVP7SDrSa4-6N04fb5T68xpW/view?usp=drivesdk', 'path':'Biologies/Bio 101-102' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'Anatomy & Physiology ': 	 {'type': 'folder', 'url': 'https://drive.google.com/drive/folders/1-L0er2nQ8m4JBf3NlcT3UdYt4__ftqjH', 'path':'Biologies' , 'children': {'Principles of Anatomy and Physiology.pdf': 	 {'type': 'file', 'url': 'https://drive.google.com/file/d/1HlWAuRCAELVzUYakLbOSJLhQRSzGcBc7/view?usp=drivesdk', 'path':'Biologies/Anatomy & Physiology ' , 'children': {} } ,'info':`No Notes on this folder yet`}  } ,'info':`No Notes on this folder yet`}  } ,'info':`  <h1>Welcome to the Touro University Course Resource Center!</h1>
    <p>
        This website is your go-to destination for accessing a wide array of course materials and valuable insights from past Touro University students.
    </p>
    <p>
        The heart of this platform lies in sharing. We house a collection of files and advice related to Touro University courses, but we're only as strong as the contributions from users like you.
    </p>
    <p>
        If you've come across useful resources during your academic endeavors, such as past tests, study materials, or valuable advice about specific courses or professors, we encourage you to share them here. Your contributions can be instrumental in helping fellow students navigate their academic challenges.
    </p>
    <p>
        So, feel free to explore the resources available, and if you have anything to contribute, don't hesitate. Let's collaborate to make this platform a valuable resource for all Touro students.
    </p>
`}}
 switch_to_dic(source['children'])