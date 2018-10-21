/**
 * @Author: PopAlexandru
 * @Date:   2018-10-21T15:42:27+02:00
 * @Email:  pop_a@etna-alternance.net
 * @Last modified by:   PopAlexandru
 * @Last modified time: 2018-10-21T15:57:26+02:00
 */

function getShortMessage(array){
  return array.filter(array => array.length < 50)
}
