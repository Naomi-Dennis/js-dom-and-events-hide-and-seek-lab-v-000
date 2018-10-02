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
    let deepNodes = findDeepestChild(root, 0 )
    let lowestNode = deepNodes.reduce( (node, iter) => node = (iter.level < node.level) ? iter : node  )
    
    return lowestNode.value
  }
  
  function findDeepestChild(root, level){
    let childNodes = Array.from(root.children)
    if(childNodes.length == 0){
      return {value: root, level: level}
    } 
    
    return childNodes.reduce( (accumulator, itr)=>
    { 
      accumulator = accumulator.concat( findDeepestChild(itr, level + 1));                        
      return accumulator; 
      
    }, [] ) 
  }

  function increaseRankBy(n){
    let nodes = document.querySelector("ranked-list").map( (par_itr) => { 
      par_itr.children.map( (child_itr) =>{
        parseInt(child_itr.innerHTML)
      })
      
      
      
      
      
    } )
  }