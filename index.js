  // describe('getFirstSelector(selector)', () => {
  //   it('returns the first element that matches the selector', () => {
  //     expect(getFirstSelector('div').id).toEqual('nested')
  //     expect(getFirstSelector('.ranked-list')).toEqual(document.querySelector('.ranked-list'))
  //   })
  // })
  
  function getFirstSelector(selector){
    return document.querySelector(selector) 
  }
  
  // describe('nestedTarget()', () => {
  //   it('pulls a .target out of #nested', () => {
  //     expect(nestedTarget()).toEqual(document.querySelector('#nested .target'))
  //   })
  // })
  function nestedTarget(){
    return document.querySelector('#nested .target')
  }
  
  
  // describe('deepestChild()', () => {
  //   it('returns the most deeply nested child in #grand-node', () => {
  //     console.log(deepestChild().innerHTML)
  //     expect(deepestChild()).toBe(document.querySelector('#grand-node div div div div'))
  //   })
  // })
  
  function deepestChild(){
    let root = document.querySelector("#grand-node")
    
  }
  function findDeepestChild(root){
    let childNodes = root.children
    if(childNodes == 0){
      return root 
    } 
    
    childNodes.map( (item)=>{ return findDeepestChild(item) } )
    
  }

  