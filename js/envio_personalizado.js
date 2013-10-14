var tipoDestinatario = Ext.create('Ext.data.Store', {
	fields: ['id', 'nome'],
	data: [
		{"id": 1, "nome": "Alunos"},
		{"id": 2, "nome": "Palestrantes"},
		{"id": 3, "nome": "Colaboradores"}
	]
});

var areaAtuacao = Ext.create('Ext.data.Store', {
	fields: ['id', 'nome'],
	data: [
		{"id": 1, "nome": "Pequenos Animais"},
		{"id": 2, "nome": "Grandes Animais"},
		{"id": 3, "nome": "Selvagens e Exóticos"},
		{"id": 4, "nome": "Saúde Pública"}
	]
});

Ext.define('UFs', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'estado_id', type: 'int'},
		{name: 'estado_nome', type: 'string'}
	]

});

var ds_uf = Ext.create('Ext.data.Store', {
	storeID: 'UFsStore',
	model: 'UFs',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_ufs.php',
		reader: {
			type: 'json', //json ou xml
			root: 'ufs',
			fields: [
				{name: 'estado_id', type: 'int', mapping: 'estado_id'},
				{name: 'estado_nome', type: 'string', mapping: 'estado_nome'}
			]
		}
	}

});

Ext.define('Cidades', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'localidade_id', type: 'int'},
		{name: 'estado_id', type: 'int'},
		{name: 'localidade_nome', type: 'string'}
	]

});

var ds_cidade = Ext.create('Ext.data.Store', {
	storeID: 'CidadesStore',
	model: 'Cidades',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_cidades.php',
		reader: {
			type: 'json', //json ou xml
			root: 'cidades',
			fields: [
				{name: 'localidade_id', type: 'string', mapping: 'localidade_id'},
				{name: 'estado_id', type: 'int', mapping: 'estado_id'},
				{name: 'localidade_nome', type: 'string', mapping: 'localidade_nome'}
			]
		}
	}

});

Ext.define('Polos', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'sisquali_id', type: 'string'},
		{name: 'nome', type: 'string'}
	]

});

var ds_polo = Ext.create('Ext.data.Store', {
	storeID: 'PolosStore',
	model: 'Polos',
	autoLoad: true,
	fields: ['localidade_nome'],
	proxy: {
		type: 'ajax',
		url: 'php/lista_polos.php',
		reader: {
			type: 'json', //json ou xml
			root: 'polos',
			fields: [
				{name: 'id', type: 'int', mapping: 'id'},
				{name: 'sisquali_id', type: 'string', mapping: 'sisquali_id'},
				{name: 'nome', type: 'string', mapping: 'nome'}
			]
		}
	}

});

Ext.define('Cursos', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'sisquali_id', type: 'string'},
		{name: 'nome', type: 'string'}
	]

});

var ds_curso = Ext.create('Ext.data.Store', {
	storeID: 'CursosStore',
	model: 'Cursos',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_Cursos.php',
		reader: {
			type: 'json', //json ou xml
			root: 'cursos',
			fields: [
				{name: 'id', type: 'int', mapping: 'id'},
				{name: 'sisquali_id', type: 'string', mapping: 'sisquali_id'},
				{name: 'nome', type: 'string', mapping: 'nome'}
			]
		}
	}

});

Ext.define('Temas', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'sisquali_id', type: 'string'},
		{name: 'nome', type: 'string'}
	]

});

var ds_tema = Ext.create('Ext.data.Store', {
	storeID: 'TemasStore',
	model: 'Temas',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_Temas.php',
		reader: {
			type: 'json', //json ou xml
			root: 'temas',
			fields: [
				{name: 'id', type: 'int', mapping: 'id'},
				{name: 'sisquali_id', type: 'string', mapping: 'sisquali_id'},
				{name: 'nome', type: 'string', mapping: 'nome'}
			]
		}
	}

});

Ext.define('Destinatarios', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'nome', type: 'string'},
		{name: 'cidade', type: 'string'},
		{name: 'uf', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'telefone', type: 'string'}
	]

});

var ds_destinatario = Ext.create('Ext.data.Store', {
	storeID: 'DestinatariosStore',
	model: 'Destinatarios',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_destinatarios.php',
		reader: {
			type: 'json', //json ou xml
			root: 'destinatarios',
			fields: [
				{name: 'seleciona', type: 'bool'},
				{name: 'nome', type: 'string', mapping: 'nome'},
				{name: 'cidade', type: 'string', mapping: 'cidade'},
				{name: 'uf', type: 'string', mapping: 'uf'},
				{name: 'email', type: 'string', mapping: 'email'},
				{name: 'telefone', type: 'string', mapping: 'telefone'}
			]
		}
	}
});

var ds_remetente = Ext.create('Ext.data.Store', {
	autoLoad: true,
	fields: [
		{name: 'nome', type: 'string'},
		{name: 'cidade', type: 'string'},
		{name: 'uf', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'telefone', type: 'string'}
	]
});

Ext.require("Ext.form.field.ComboBox", function () {
    Ext.override(Ext.form.field.ComboBox, {
        beforeBlur: function () {
            if (this.getRawValue().length === 0) {
                this.lastSelection = [];
            }
            this.callOverridden();
        }
    });
});

var filt_nome = Ext.create('Ext.form.field.Text', {
	fieldLabel: 'Nome',
	columnWidth: .50,
	style: 'margin-right:50px;',
});

var filt_di = Ext.create('Ext.form.field.Date', {
	fieldLabel: 'Data Inicial',
	columnWidth: .25,
	style: 'margin-right:50px;',
});

var filt_df = Ext.create('Ext.form.field.Date', {
	fieldLabel: 'Data Final',
	columnWidth: .25,
	style: 'margin-right:50px;',
});

var filt_uf = Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'UF',
	columnWidth: .50,
	style: 'margin-right:50px;',
	store: ds_uf,
	displayField: 'estado_nome',
	valueField: 'estado_id',
	emptyText: 'Escolha um Estado...',
	minChars: 1,
	queryMode: 'local',
	forceSelection: true,
	typeAhead: true,
	enableKeyEvents: true,
	listeners: {
		blur: function() {
			ds_cidade.clearFilter();
			if(this.getRawValue() !== '') {
				ds_cidade.filter("estado_id", this.getValue());	
			}
		}
	}
});

filt_uf.focus();

var filt_polo = Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'Polo',
	columnWidth: .50,
	store: ds_polo,
	displayField: 'nome',
	valueField: 'id',
	emptyText: 'Escolha um Polo...',
	minChars: 1,
	queryMode: 'local',
	forceSelection: true,
	typeAhead: true
});

var filt_cidade = Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'Cidade',
	columnWidth: .50,
	style: 'margin-right:50px;',
	store: ds_cidade,
	displayField: 'localidade_nome',
	valueField: 'localidade_id',
	emptyText: 'Escolha uma Cidade...',
	minChars: 1,
	queryMode: 'local',
	forceSelection: true,
	typeAhead: true,
	enableKeyEvents: true,
	listeners: {
		keyup: function() {
			// ds_cidade.clearFilter();
			ds_cidade.removeFilter('filt_ln');
			if (this.getRawValue() !== '') {
				ds_cidade.addFilter({
					id: 'filt_ln',
					property: 'localidade_nome', 
					value: this.getValue()
				});
			}
		}
	}
});

var filt_curso = Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'Curso',
	columnWidth: .50,
	store: ds_curso,
	displayField: 'nome',
	valueField: 'id',
	emptyText: 'Escolha um Curso...',
	minChars: 1,
	queryMode: 'local',
	forceSelection: true,
	typeAhead: true
});

var pnlFiltroAlunos = Ext.create('Ext.form.Panel', {
	title: 'Filtros',
	frame: false,
	renderTo: 'qlsms_filtro02',
	width: 1160,
	layout: 'column',
	border: false,
	bodyPadding: 20,
	collapsible: true,
	buttons: [{
		text: 'Filtrar'
	}]
});

pnlFiltroAlunos.insert(0, filt_curso);
pnlFiltroAlunos.insert(0, filt_cidade);
pnlFiltroAlunos.insert(0, filt_polo);
pnlFiltroAlunos.insert(0, filt_uf);
pnlFiltroAlunos.insert(0, filt_df);
pnlFiltroAlunos.insert(0, filt_di);
pnlFiltroAlunos.insert(0, filt_nome);

var filt_area = Ext.create('Ext.form.ComboBox', {
	fieldLabel: 'Área de Atuação',
	columnWidth: .50,
	store: areaAtuacao,
	queryMode: 'local',
	displayField: 'nome',
	valueField: 'id',
	emptyText: 'Escolha uma Área...',
	minChars: 1,
	typeAhead: true
});

var filt_tema = Ext.create('Ext.form.field.ComboBox', {
	fieldLabel: 'Temática',
	columnWidth: .50,
	store: ds_tema,
	queryMode: 'local',
	displayField: 'nome',
	valueField: 'id',
	emptyText: 'Escolha uma Temática...',
	minChars: 1,
	forceSelection: true,
	typeAhead: true
});

var pnlFiltroPalestrantes = Ext.create('Ext.form.Panel', {
	title: 'Filtros',
	frame: false,
	renderTo: 'qlsms_filtro02',
	width: 1160,
	layout: 'column',
	border: false,
	bodyPadding: 20,
	collapsible: true,
	items: [filt_tema
	],
	buttons: [{
		text: 'Filtrar'
	}]
});

pnlFiltroPalestrantes.hide();

var pnlFiltroColaboradores = Ext.create('Ext.form.Panel', {
	title: 'Filtros',
	renderTo: 'qlsms_filtro02',
	width: 1160,
	layout: 'column',
	frame: false,
	border: false,
	bodyPadding: 20,
	collapsible: true,
	buttons: [{
		text: 'Filtrar'
	}]
});

pnlFiltroColaboradores.hide();

var grdRemetentes = Ext.create('Ext.grid.Panel', {
	id: 'grdRemetentes',
	store: ds_remetente,
	columnWidth: 1,
	columns: [
		{ text: 'Nome', dataIndex: 'nome', width: 380},
		{ text: 'Cidade', dataIndex: 'cidade', width: 300},
		{ text: 'UF', dataIndex: 'uf', width: 50},
		{ text: 'e-mail', dataIndex: 'email', width: 240},
		{ text: 'Telefone', dataIndex: 'telefone', width: 100}
	],
	height: 400,
	width: 1120
});

var pnlListaRemetentes = Ext.create('Ext.form.Panel', {
	title: 'Remetentes Selecionados',
	renderTo: 'qlsms_lista02',
	width: 1160,
	layout: 'column',
	frame: false,
	border: false,
	bodyPadding: 20,
	collapsible: true,
	items: [
		grdRemetentes
	]
});

var grdDestinatarios = Ext.create('Ext.grid.Panel', {
	store: ds_destinatario,
	columnWidth: 1,
	selType: 'checkboxmodel',
	columns: [
		{ text: 'Nome', dataIndex: 'nome', width: 380},
		{ text: 'Cidade', dataIndex: 'cidade', width: 300},
		{ text: 'UF', dataIndex: 'uf', width: 50},
		{ text: 'e-mail', dataIndex: 'email', width: 240},
		{ text: 'Telefone', dataIndex: 'telefone', width: 100}
	],
	height: 400,
	width: 1120
});

var pnlListaDestinatarios = Ext.create('Ext.form.Panel', {
	title: 'Destinatários',
	renderTo: 'qlsms_lista01',
	width: 1160,
	layout: 'column',
	frame: false,
	border: false,
	bodyPadding: 20,
	collapsible: true,
	items: [
		grdDestinatarios
	],
	buttons: [{
		text: 'Selecionar',
		handler: function() {
			var s = grdDestinatarios.getSelectionModel().getSelection();
			console.log(s);
			Ext.each(s, function(item) {
				ds_remetente.add(0, {
					nome: 'Alexandre',
					cidade: 'Campinas',
					uf: 'SP',
					email: 'alexandre.bonfa@gmail.com',
					telefone: '19 98203-6040'
				})
			})
			grdRemetentes.store = ds_remetente;
			ds_remetente.load({ params: {start: 0, limit: 20}});
			Ext.getCmp('grdRemetentes').getView().refresh();
			console.log(ds_remetente);
			alert('Feito!');
		}
	}]
});

Ext.onReady(function() {

	Ext.create('Ext.form.ComboBox', {
		fieldLabel: 'Destinatários',
		store: tipoDestinatario,
		queryMode: 'local',
		displayField: 'nome',
		valueField: 'id',
		allowBlank: false,
		value: 1,
		forceSelection: true,
		renderTo: qlsms_filtro01,
		listeners: {
			change: function() {
				if (this.getValue() === 1) {
					pnlFiltroPalestrantes.hide();
					pnlFiltroColaboradores.hide();
					pnlFiltroAlunos.insert(0, filt_curso);
					pnlFiltroAlunos.insert(0, filt_cidade);
					pnlFiltroAlunos.insert(0, filt_polo);
					pnlFiltroAlunos.insert(0, filt_uf);
					pnlFiltroAlunos.insert(0, filt_df);
					pnlFiltroAlunos.insert(0, filt_di);
					pnlFiltroAlunos.insert(0, filt_nome);
					pnlFiltroAlunos.show();
				} else if (this.getValue() === 2) {
					pnlFiltroAlunos.hide();
					pnlFiltroColaboradores.hide();
					pnlFiltroPalestrantes.insert(0, filt_cidade);
					pnlFiltroPalestrantes.insert(0, filt_tema);
					pnlFiltroPalestrantes.insert(0, filt_uf);
					pnlFiltroPalestrantes.insert(0, filt_area);
					pnlFiltroPalestrantes.insert(0, filt_nome);
					pnlFiltroPalestrantes.show();
				} else if (this.getValue() === 3) {
					pnlFiltroAlunos.hide();
					pnlFiltroPalestrantes.hide();
					pnlFiltroColaboradores.insert(0, filt_cidade);
					pnlFiltroColaboradores.insert(0, filt_uf);
					pnlFiltroColaboradores.insert(0, filt_polo);
					pnlFiltroColaboradores.insert(0, filt_nome);
					pnlFiltroColaboradores.show();
				}
			}
		}
	});

});

