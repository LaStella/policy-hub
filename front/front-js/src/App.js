import { policyRequest } from './api.js'
import storage  from './storage.js'
import debounce from './debounce.js';
import Header from "./Header.js";
import SuggestKeywords from './SuggestKeywords.js';
import Card from './Card.js';
import Popup from './popup.js';
import Footer from './footer.js';

export default function App({$target, initialState}) {
    this.state = {
        keyword: '',
        keywords: [],
        name: '',
        tag: '',
        logo: '', 
        description: '',
        policyLink: '',
        favor: false
    }

    this.cache = storage.getItem('keywords_cache', {})

    this.setState = nextState => {
        this.state = nextState

        header.setState({
            keyword: this.state.keyword
        })
        
        
        suggestKeywords.setState({
            keywords: this.state.keywords
        })

        if(this.state) {
            card.setState(this.state)
        }

    }

    const header = new Header({
        $target,
        initialState: {
            keyword: this.state.keyword
        },
        onKeywordInput: debounce(async (keyword) => {
            if(keyword.trim().length > 1) {
                
                let keywords = null

                if(this.cache[keyword]) {
                    keywords = this.cache[keyword]
                } else {
                    keywords = await policyRequest(`/search?q=${keyword}`)
                    this.cache[keyword] = keywords
                    storage.setItem('keywords_cache', this.cache)
                }

                this.setState({
                    ...this.state,
                    keyword,
                    keywords
                })
            }
        }, 300),
        onEnter: () => {
            fetchCatsImage()
        }
    })

    const suggestKeywords = new SuggestKeywords({
        $target,
        initialState: {
            keywords: this.state.keywords,
            cursor: -1 // 커서가 -1인 경우는 아무것도 없는 것
        },
        onKeywordSelect: (keyword) => {
            this.setState({
                ...this.state,
                keyword,
                keywords: []
            })
            card()
        }
    })

    const card = new Card({
        $target,
        initialState: this.state,
        openPopup: (btnModal) => {
            const policyData = initialState
            // 팝업 창이 열려있으면 또 못열리게 함 
            if (btnModal.childElementCount==0){

                for(let i=0; i<policyData.length; i++){
                    if(policyData[i].name === btnModal.innerText){
                        initialState = policyData[i]
                    }
                }
                const popup = new Popup({
                    btnModal,
                    initialState,
                    onClose: () => {
                        popup.setState(null)
                }})
            }
  
        }  
    }) 

    new Footer({
        $target
    })
}

