
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
    </svg>`}
    else { img = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-font-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5l.057-2z"/>
</svg>`}

     return `
    <div class="card file_card">
    <div class="card-body d-flex align-items-center ">
        <div class=" inline btn btn-light d-flex align-items-center" onclick="openNewWindow('${link}')" >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-download inline" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
          </div>
        <div style="width: 10px;"></div>
        <div onclick="switch_to_dic(${func_path})" class="d-flex align-items-center "  style="padding-top: 7px; padding-bottom: 7px" >

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
    <h5 class="card-title title-case">Other Info</h5>
   

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


}







source = {children: {'Heac crap': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'' , 'children': {'Sociology': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'Heac crap' , 'children': {'Fall Essay Promt.doc': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Sociology' , 'children': {} } ,'Fall Essay .pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Sociology' , 'children': {} } ,'Fall midterm promt .pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Sociology' , 'children': {} } ,'Fall Final promt.docx': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Sociology' , 'children': {} } ,'SASN 103 Spring midterm.docx': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Sociology' , 'children': {} } ,'info':'Starting testcode'}  } ,'Psychology': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'Heac crap' , 'children': {'Midterm: 202270-PSYN-101-BDD-BJ-VC-14983.pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'Heac crap/Psychology' , 'children': {} } ,'info':'Starting testcode'}  } ,'info':'count: '}  } ,'math': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'' , 'children': {'precalc': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'math' , 'children': {'chem test.pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'math/precalc' , 'children': {} } ,'info':'Starting testcode'}  } ,'info':'Starting testcode'}  } ,'chem': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'' , 'children': {'orgo sub': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'chem' , 'children': {'chem book.doc': 	 {'type': 'file', 'url': 'http://example.com', 'path':'chem/orgo sub' , 'children': {} } ,'chem test.pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'chem/orgo sub' , 'children': {} } ,'info':'Starting testcode'}  } ,'chemistry sub': 	 {'type': 'folder', 'url': 'http://example.com', 'path':'chem' , 'children': {'orgo book.doc': 	 {'type': 'file', 'url': 'http://example.com', 'path':'chem/chemistry sub' , 'children': {} } ,'orgo test.pdf': 	 {'type': 'file', 'url': 'http://example.com', 'path':'chem/chemistry sub' , 'children': {} } ,'info':'Starting testcode'}  } ,'info':'count: '}  } ,'info':'count: '}}

source = {children:{'Chemistries':{'type':'folder','url':'https://chemisties.com','path':'','children':{'Chemistry ':{'type':'folder','url':'https://drive.google.com/file/d/1sKzlKAK8GMObyFwiyT4ewXVIYHb84j9h/view?usp=drivesdk','path':'Chemistries','children':{'periodic_table_multicoloured.pdf':{'type':'file','url':'https://drive.google.com/file/d/1sKzlKAK8GMObyFwiyT4ewXVIYHb84j9h/view?usp=drivesdk','path':'Chemistries/Chemistry ','children':{}},'info':'Starting testcode'}},'Organic Chemistry':{'type':'folder','url':'https://orgo.com','path':'Chemistries','children':{'Orgo Book.pdf':{'type':'file','url':'https://drive.google.com/file/d/1pEoOikrY0fmOpoUyGXAnxSpTbX4FyGpR/view?usp=drivesdk','path':'Chemistries/Organic Chemistry','children':{}},'info':'Starting testcode'}},'info':'Starting testcode'}},'info.txt':{'type':'file','url':'https://drive.google.com/file/d/1aQyPgdXFlGBVm7us01jAJPwchOkiZNHn/view?usp=drivesdk','path':'','children':{}},'info':'Starting testcode'}}


switch_to_dic(source['children'])

