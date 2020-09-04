//Two solutions in Java: Sorting & Heap

//Sorting solution
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> map= new HashMap<>();
        
        for (String word : words) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        
        List<String> keys = new ArrayList(map.keySet());
        Collections.sort(keys, (a,b) -> 
                         map.get(a).equals(map.get(b)) ? a.compareTo(b) : map.get(b) - map.get(a)
        );
            
        return keys.subList(0, k);
    }
}

//Heap solution
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> map= new HashMap<>();
        
        for (String word : words) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        
        //Make the heap in reverse order
        PriorityQueue<String> heap = new PriorityQueue<String>((a,b) -> 
            map.get(a).equals(map.get(b)) ? b.compareTo(a) : map.get(a) - map.get(b)
        );
        
        for (String key : map.keySet()) {
            heap.offer(key);
            if (heap.size() > k) {
                heap.poll();
            }
        }
        
        List<String> ans = new ArrayList();
        while (!heap.isEmpty()) {
            ans.add(heap.poll());
        }
        
        Collections.reverse(ans);
        return ans;
    }
}