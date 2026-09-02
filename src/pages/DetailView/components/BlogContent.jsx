const BlogContent = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800 transition-colors">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-neutral-800">
        Məqalə Məzmunu
      </h2>
      <div className="text-slate-700 dark:text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base font-medium">
        {blog?.content ? (
          Array.isArray(blog.content) ? ( blog.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)) : (
            <p>{blog.content}</p>)) : 
        (<p>{blog?.longDescription || blog?.description}</p>)}
      </div>
    </div>
  )
}

export default BlogContent;