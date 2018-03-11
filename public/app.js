'use strict';
var app = angular.module('sirAccordion', [
  'sir-accordion'
  ])

app.run([function() {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
}]);

app.controller('Principal',['$scope','$compile',function($scope,$compile){
  $scope.activeArray = 1;
  $scope.coord = '';
  $scope.accordionConfig = {
    debug: false,
    animDur: 300,
    expandFirst: false,
    autoCollapse: true,
    watchInternalChanges: false,
    headerClass: '',
    beforeHeader: '',
    afterHeader: '<div class="drop-icon-wrapper sir-accordion-vertical-align"><i class="glyphicon glyphicon-chevron-down"></i></div>',
    topContentClass: '',
    beforeTopContent: '',
    afterTopContent: '<div><p><small></small></p></div>', 
    bottomContentClass: '',
    beforeBottomContent: '',
    afterBottomContent: ''
  };

  $scope.accordionArray = 
  [
	{"title":"Mental Health","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Mental Health Awareness","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Deborah Golder","topContent":['Associate Vice Provost and Dean of Residential Education, dgolder@stanford.edu, https://studentaffairs.stanford.edu/who-we-are/residential-education'],"bottomContent":null},
				{"title":"Lisa De La Cruz Caldera","topContent":['Lead Residence Dean, lisadlc@stanford.edu, https://resed.stanford.edu/people/lisa-de-la-cruz-caldera'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group ASSU Senate","topContent":['https://associatedstudents.stanford.edu/undergraduate-senate'],"bottomContent":null},
				{"title":"Group Stanford Mental Health Outreach","topContent":['http://smho.stanford.edu'],"bottomContent":null},
				{"title":"Group The Bridge Peer Counseling Center","topContent":['http://thebridge.stanford.edu'],"bottomContent":null},
				{"title":"Group We Continue","topContent":['http://www.wecontinue.org'],"bottomContent":null},
				{"title":"Group Stanford+Mental Health","topContent":['https://orgsync.com/139262/chapter'],"bottomContent":null},
			]},
		]},
		{"title":"Mental Health Crisis Management","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Alejandro Martinez","topContent":['Associate Dean of Students, A.Martinez@stanford.edu'],"bottomContent":null},
				{"title":"Chris Griffith","topContent":['Associate Vice Provost and Dean of Students, griffith@stanford.edu, https://studentaffairs.stanford.edu/who-we-are/dean-students'],"bottomContent":null},
				{"title":"Deborah Golder","topContent":['Associate Vice Provost and Dean of Residential Education, dgolder@stanford.edu, https://studentaffairs.stanford.edu/who-we-are/residential-education'],"bottomContent":null},
				{"title":"Lisa De La Cruz Caldera","topContent":['Lead Residence Dean, lisadlc@stanford.edu, https://resed.stanford.edu/people/lisa-de-la-cruz-caldera'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
			]},
		]},
		{"title":"Mental Health Suicide Prevention","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group We Continue","topContent":['http://www.wecontinue.org'],"bottomContent":null},
			]},
		]},
		{"title":"Mental Health Treatment","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Carole Pertofsky","topContent":['Director of Wellness and Health Promotion Services, perto@stanford.edu, https://vaden.stanford.edu/people/carole-pertofsky-med'],"bottomContent":null},
				{"title":"Inge Hansen","topContent":['Assistant Director for Outreach / Director, Weiland Health Initiative, ihansen@stanford.edu, https://vaden.stanford.edu/people/inge-hansen-psyd'],"bottomContent":null},
				{"title":"James Jacobs","topContent":['Executive Director of Vaden Health Center; Associate Vice Provost for Student Affairs, jamesrj@stanford.edu, https://vaden.stanford.edu/people/james-r-jacobs-md-phd'],"bottomContent":null},
				{"title":"Ronald Albucher","topContent":['Staff Psychiatrist, albucher@stanford.edu, https://vaden.stanford.edu/people/ronald-c-albucher-md'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group The Bridge Peer Counseling Center","topContent":['http://thebridge.stanford.edu'],"bottomContent":null},
			]},
		]},
		{"title":"Mental Health Wellness","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Carole Pertofsky","topContent":['Director of Wellness and Health Promotion Services, perto@stanford.edu, https://vaden.stanford.edu/people/carole-pertofsky-med'],"bottomContent":null},
				{"title":"Inge Hansen","topContent":['Assistant Director for Outreach / Director, Weiland Health Initiative, ihansen@stanford.edu, https://vaden.stanford.edu/people/inge-hansen-psyd'],"bottomContent":null},
				{"title":"James Jacobs","topContent":['Executive Director of Vaden Health Center; Associate Vice Provost for Student Affairs, jamesrj@stanford.edu, https://vaden.stanford.edu/people/james-r-jacobs-md-phd'],"bottomContent":null},
				{"title":"Jane Shaw","topContent":['Dean for Religious Life and Professor of Religious Studies, janeshaw@stanford.edu, https://religiouslife.stanford.edu/people/rev-professor-jane-shaw'],"bottomContent":null},
				{"title":"Joanne Sanders","topContent":['Associate Dean for Religious Life, joanne.sanders@stanford.edu, https://religiouslife.stanford.edu/people/rev-joanne-sanders'],"bottomContent":null},
				{"title":"Patricia Karlin-Neumann","topContent":['Senior Associate Dean for Religious Life, rabbipkn@stanford.edu, https://religiouslife.stanford.edu/people/rabbi-patricia-karlin-neumann'],"bottomContent":null},
				{"title":"Sughra Ahmed","topContent":['Associate Dean for Religious Life, sughra@stanford.edu, https://religiouslife.stanford.edu/people/sughra-ahmed'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group The Bridge Peer Counseling Center","topContent":['http://thebridge.stanford.edu'],"bottomContent":null},
				{"title":"Group The Stanford Happiness Collective","topContent":['https://orgsync.com/50652/chapter'],"bottomContent":null},
			]},
		]},
	]},
	{"title":"Sexual Violence","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Sexual Violence Advocacy","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group ASSU Exec","topContent":['https://associatedstudents.stanford.edu/executive-landing'],"bottomContent":null},
				{"title":"Group Stanford Association of Students for Sexual Assault Prevention","topContent":['https://orgsync.com/129622/chapter'],"bottomContent":null},
			]},
		]},
		{"title":"Sexual Violence Campus Climate Survey","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Brian Cook","topContent":['Director of Assessment and Program Evaluation, bcook@stanford.edu'],"bottomContent":null},
				{"title":"Corrie Potter","topContent":['Associate Vice Provost and Director, cjpotter@stanford.edu'],"bottomContent":null},
				{"title":"Lauren Schoenthaler","topContent":['Senior Associate Vice Provost for Institutional Equity and Access, lks@stanford.edu, https://equity.stanford.edu/people/lauren-knudsen-schoenthaler'],"bottomContent":null},
				{"title":"Stephanie Kalfayan","topContent":['Vice Provost for Academic Affairs, kalfayan@stanford.edu'],"bottomContent":null},
				{"title":"Susie Brubaker-Cole","topContent":['Vice Provost for Student Affairs, susiebc@stanford.edu, https://studentaffairs.stanford.edu/who-we-are/vice-provost-student-affairs'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Campus Climate Survey Committee","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Auguste Seong","topContent":null,"bottomContent":null},
					{"title":"Brian Cook","topContent":null,"bottomContent":null},
					{"title":"Clea Sarnquist","topContent":null,"bottomContent":null},
					{"title":"Corrie Potter","topContent":null,"bottomContent":null},
					{"title":"Jeremy Freese","topContent":null,"bottomContent":null},
					{"title":"Lauren Schoenthaler","topContent":null,"bottomContent":null},
					{"title":"Michael Baiocchi","topContent":null,"bottomContent":null},
					{"title":"Rachel Green","topContent":null,"bottomContent":null},
					{"title":"Sheri Sheppard","topContent":null,"bottomContent":null},
					{"title":"Stephanie Kalfayan","topContent":null,"bottomContent":null},
					{"title":"Susan McConnell","topContent":null,"bottomContent":null},
					{"title":"Susie Brubaker-Cole","topContent":null,"bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
			]},
		]},
		{"title":"Sexual Violence Education and Prevention","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Brianna Booth","topContent":['Director of Positive Sexuality, Design & Development, boothbk@stanford.edu, https://sara.stanford.edu/about-sara/our-team-2'],"bottomContent":null},
				{"title":"Carley Flanery","topContent":['Director of Office of Sexual Assualt and Relationship Abuse Education & Response, cflanery@stanford.edu, https://sara.stanford.edu/about-sara/our-team-2'],"bottomContent":null},
				{"title":"Grace Poon","topContent":['Coordinator of Prevention Education and Training, gpoon1@stanford.edu, https://equity.stanford.edu/people/grace-poon'],"bottomContent":null},
				{"title":"Lauren Schoenthaler","topContent":['Senior Associate Vice Provost for Institutional Equity and Access, lks@stanford.edu, https://equity.stanford.edu/people/lauren-knudsen-schoenthaler'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Sexual Assault and Relationship Abuse Advisory Board","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Allison Tielking","topContent":null,"bottomContent":null},
					{"title":"Erin Neumann","topContent":null,"bottomContent":null},
					{"title":"Gia Colgan","topContent":null,"bottomContent":null},
					{"title":"Katherine Carey","topContent":null,"bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
			]},
		]},
		{"title":"Sexual Violence Survivor Resources","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Brianna Booth","topContent":['Director of Positive Sexuality, Design & Development, boothbk@stanford.edu, https://sara.stanford.edu/about-sara/our-team-2'],"bottomContent":null},
				{"title":"Carley Flanery","topContent":['Director of Office of Sexual Assualt and Relationship Abuse Education & Response, cflanery@stanford.edu, https://sara.stanford.edu/about-sara/our-team-2'],"bottomContent":null},
				{"title":"Catherine Glaze","topContent":['Title IX Coordinator, cglaze@stanford.edu, https://equity.stanford.edu/people/catherine-glaze'],"bottomContent":null},
				{"title":"Grace Poon","topContent":['Coordinator of Prevention Education and Training, gpoon1@stanford.edu, https://equity.stanford.edu/people/grace-poon'],"bottomContent":null},
				{"title":"Helen Wilson","topContent":['Director, Confidential Support Team, hwilson3@stanford.edu, https://vaden.stanford.edu/people/helen-w-wilson-phd'],"bottomContent":null},
				{"title":"Jane Shaw","topContent":['Dean for Religious Life and Professor of Religious Studies, janeshaw@stanford.edu, https://religiouslife.stanford.edu/people/rev-professor-jane-shaw'],"bottomContent":null},
				{"title":"Joanne Sanders","topContent":['Associate Dean for Religious Life, joanne.sanders@stanford.edu, https://religiouslife.stanford.edu/people/rev-joanne-sanders'],"bottomContent":null},
				{"title":"Lauren Schoenthaler","topContent":['Senior Associate Vice Provost for Institutional Equity and Access, lks@stanford.edu, https://equity.stanford.edu/people/lauren-knudsen-schoenthaler'],"bottomContent":null},
				{"title":"Miranda Tuttle","topContent":['Outreach and Student Resources Manager, mtuttle@stanford.edu, https://equity.stanford.edu/people/miranda-tuttle'],"bottomContent":null},
				{"title":"Patricia Karlin-Neumann","topContent":['Senior Associate Dean for Religious Life, rabbipkn@stanford.edu, https://religiouslife.stanford.edu/people/rabbi-patricia-karlin-neumann'],"bottomContent":null},
				{"title":"Sughra Ahmed","topContent":['Associate Dean for Religious Life, sughra@stanford.edu, https://religiouslife.stanford.edu/people/sughra-ahmed'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Confidential Support Team Advisory Board","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Cecilia Thomas","topContent":null,"bottomContent":null},
					{"title":"Eliana Greenberg","topContent":null,"bottomContent":null},
					{"title":"Meghan Warner","topContent":null,"bottomContent":null},
					{"title":"Michael Ocon","topContent":null,"bottomContent":null},
					{"title":"Quito Tsui","topContent":null,"bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
			]},
		]},
		{"title":"Sexual Violence Title IX","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Administrators","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Catherine Glaze","topContent":['Title IX Coordinator, cglaze@stanford.edu, https://equity.stanford.edu/people/catherine-glaze'],"bottomContent":null},
				{"title":"Lauren Schoenthaler","topContent":['Senior Associate Vice Provost for Institutional Equity and Access, lks@stanford.edu, https://equity.stanford.edu/people/lauren-knudsen-schoenthaler'],"bottomContent":null},
				{"title":"Miranda Tuttle","topContent":['Outreach and Student Resources Manager, mtuttle@stanford.edu, https://equity.stanford.edu/people/miranda-tuttle'],"bottomContent":null},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
			]},
		]},
	]},
];

  $scope.toggleAutoCollapse = function(){
    $scope.$broadcast('sacCollapseAll');
    $scope.accordionConfig.autoCollapse = !$scope.accordionConfig.autoCollapse;
  };

  $scope.expandByCoord = function(){
    $scope.$broadcast('sacExpandContentById', $scope.coord);
  }

  $scope.collapseByCoord = function(){
    $scope.$broadcast('sacCollapseContentById', $scope.coord);
  }

  $scope.expandAll = function(){
    $scope.$broadcast('sacExpandAll');
  };

  $scope.collapseAll = function(){
    $scope.$broadcast('sacCollapseAll');
  };

}]);