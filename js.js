const _names = ['Hi There...','I am katayoon faraji','A frontend developer','welcome to my page❤']
        
        let txt = document.getElementById('text')
        let status = 'writing'
        let i = 0
        let t = 1
        let _name =''

        function _turn(){
            if(i<=((_names.length)-1)){
                _name = _names[i]
                if(i == ((_names.length)-1)){
                    i = 0
                }
                else{
                    i++
                }
            }
        }
        _turn()
        // function _wrtite() {

        //     console.log(_name);

        //     setInterval(() => {
        //         if(status=='writing'){
                
        //             if((t<=(_name.length))){
                        
        //                 txt.innerHTML = _name.slice(0,t)
        //                 if(t == ((_name.length))){
        //                     status ='cleaning'
        //                 }
        //                 else{
        //                     t++
        //                 }
        //             }
        //         }
        //         else{
        //             if(t>=0){
        //                 txt.innerHTML = _name.slice(0,t)
        //                 if(t==0){
        //                     status ='writing'
        //                     t = 1
        //                     _turn()
        //                 }
        //                 else{
        //                     t--
        //                 }
        //             }
        //         }
        //     }, 100);
        // }
        // _wrtite()
        setInterval(() => {
                if(status=='writing'){
                
                    if((t<=(_name.length))){
                        
                        txt.innerHTML = _name.slice(0,t)
                        if(t == ((_name.length))){
                            status ='cleaning'
                        }
                        else{
                            t++
                        }
                    }
                }
                else{
                    if(t>=0){
                        txt.innerHTML = _name.slice(0,t)
                        if(t==0){
                            status ='writing'
                            t = 1
                            _turn()
                        }
                        else{
                            t--
                        }
                    }
                }
            }, 100);