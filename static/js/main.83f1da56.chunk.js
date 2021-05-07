(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1hwqY",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3EPfJ"}},12:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2jIsU",Modal:"Modal_Modal__12KlS"}},23:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2jPcN"}},25:function(e,a,t){e.exports={Loader:"Loader_Loader__1BJRy"}},26:function(e,a,t){e.exports={Button:"Button_Button__xakTg"}},32:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(9),c=t.n(o),l=(t(31),t(32),t(14)),s=t(4),i=t(5),u=t(7),h=t(6),m=t(8),d=t.n(m),g=t(0),b=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:""},e.handleChange=function(a){var t=a.target.value;e.setState({query:t})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.query;e.props.onSubmit(t),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",value:e,autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),t}(r.Component),p=t(11),f=t.n(p),j=function(e){var a=e.webformatURL,t=e.largeImageURL;return Object(g.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:"","data-source":t,className:f.a.ImageGalleryItemImage})})},y=t(23),v=t.n(y),O=function(e){var a=e.images,t=e.onClick;return Object(g.jsx)("ul",{className:v.a.ImageGallery,onClick:t,children:a.map((function(e){var a=e.id,t=e.webformatURL,r=e.largeImageURL;return Object(g.jsx)(j,{webformatURL:t,largeImageURL:r},a)}))})};O.defaultProps={onClick:function(){}};var _=O,I=t(24),S=t.n(I),x=t(25),k=t.n(x),w=function(){return Object(g.jsx)(S.a,{className:k.a.Loader,type:"Circles",color:"tomato",height:80,width:80})},C=t(26),L=t.n(C),M=function(e){var a=e.onClick;return Object(g.jsx)("button",{type:"button",onClick:a,className:L.a.Button,children:"Load more"})},N=t(12),B=t.n(N),U=document.querySelector("#modal-root"),F=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handleKeydown=function(a){27===a.keyCode&&e.props.onClose()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onClose()},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:B.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:B.a.Modal,children:this.props.children})}),U)}}]),t}(n.a.Component),G=t(13),P=t.n(G);P.a.defaults.baseURL="https://pixabay.com/api";var Q=function(e){var a=e.searchQuery,t=void 0===a?"":a,r=e.currentPage,n=void 0===r?1:r,o=e.pageSize,c=void 0===o?12:o;return P.a.get("/?q=".concat(t,"&page=").concat(n,"&key=").concat("20726897-5533683f6552092b306b2e1ad","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data}))},R=(t(72),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={images:[],searchQuery:"",currentPage:1,isLoading:!1,showModal:!1,largeImageUrl:""},e.handleQueryChange=function(a){e.setState({images:[],searchQuery:a,currentPage:1})},e.fetchImages=function(){var a=e.state,t=a.currentPage,r={searchQuery:a.searchQuery,currentPage:t};e.setState({isLoading:!0}),Q(r).then((function(a){var t=a.hits;e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){alert("Error, please try again"),console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(a){var t=a.target;"IMG"===t.nodeName&&e.setState({showModal:!0,largeImageUrl:t.dataset.source})},e.closeModal=function(){e.setState({showModal:!1,largeImageUrl:""})},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,a){this.state.searchQuery!==a.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,r=e.showModal,n=e.largeImageUrl,o=a.length>0;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(b,{onSubmit:this.handleQueryChange}),Object(g.jsx)(_,{images:a,onClick:this.openModal}),r&&Object(g.jsx)(F,{onClose:this.closeModal,children:Object(g.jsx)("img",{src:n,alt:""})}),t&&Object(g.jsx)(w,{}),o&&!t&&Object(g.jsx)(M,{onClick:this.fetchImages})]})}}]),t}(n.a.Component));c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__1p3_K",SearchForm:"Searchbar_SearchForm__3_9c2",SearchFormButton:"Searchbar_SearchFormButton__3ckkb",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__18NeH",SearchFormInput:"Searchbar_SearchFormInput__3ZRid"}}},[[73,1,2]]]);
//# sourceMappingURL=main.83f1da56.chunk.js.map